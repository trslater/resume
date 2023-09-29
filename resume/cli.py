import sys

from . import server
from .data import data
from .plaintext import plaintext


def run():
    try:
        fmt = sys.argv[1]

    except IndexError:
        fmt = None

    if fmt == "serve":
        server.start()

    else:
        print(plaintext(data()))
