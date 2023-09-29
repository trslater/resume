import sys

from . import server

try:
    fmt = sys.argv[1]

except IndexError:
    fmt = None

if fmt == "serve":
    server.start()
