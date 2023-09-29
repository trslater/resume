from flask import Flask, render_template

from .data import data

APP = Flask(__name__)


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
