import os
import re
import sys
import http.server
import socketserver

class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def send_head(self):
        """Common code for GET and HEAD commands, with byte ranges support."""
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            fs = os.fstat(f.fileno())
            file_len = fs[6]
        except:
            f.close()
            self.send_error(404, "File not found")
            return None

        # Parse Range header
        range_header = self.headers.get('Range')
        if not range_header:
            return super().send_head()

        # Format: bytes=start-end
        match = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not match:
            return super().send_head()

        start = int(match.group(1))
        end_str = match.group(2)
        if end_str:
            end = int(end_str)
        else:
            end = file_len - 1

        if start >= file_len or end >= file_len or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            self.send_header('Content-Range', f'bytes */{file_len}')
            self.end_headers()
            f.close()
            return None

        self.send_response(206)
        self.send_header('Content-Type', ctype)
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_len}')
        self.send_header('Content-Length', str(end - start + 1))
        self.end_headers()

        # Seek to start
        f.seek(start)
        self.range_start = start
        self.range_end = end
        return f

    def copyfile(self, source, outputfile):
        """Copy a block or the whole file depending on the range request."""
        if not hasattr(self, 'range_start'):
            super().copyfile(source, outputfile)
            return

        # Copy only the requested range
        remaining = self.range_end - self.range_start + 1
        buffer_size = 64 * 1024
        while remaining > 0:
            chunk_size = min(buffer_size, remaining)
            data = source.read(chunk_size)
            if not data:
                break
            outputfile.write(data)
            remaining -= len(data)

if __name__ == '__main__':
    port = 8080
    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, RangeRequestHandler)
    print(f"Starting multi-threaded range-supporting server on port {port}...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        sys.exit(0)
