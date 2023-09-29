from flask import Flask, render_template

from . import config
from .data import data

APP = Flask(
    __name__,
    static_folder=config.PROJECT_PATH/"static",
    template_folder=config.PROJECT_PATH/"templates",
)


def start():
    APP.run(debug=True)


@APP.template_filter("date")
def date_formatted(date, format):
    return date.strftime(format)


@APP.route("/")
@APP.route("/<doc>")
def main(doc="resume"):
    title = doc.replace("-", " ").title()

    return render_template(f"{doc}.html", title=title, **data())
