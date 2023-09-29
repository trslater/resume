import os
from pathlib import Path
import tomllib

from flask import Flask, render_template

PROJECT_PATH = Path(__file__, "..").resolve()
DEFAULT_DATA_REL_PATH = "data/public.toml"

APP = Flask(__name__)


@APP.template_filter("date")
def date_formatted(date, format):
    return date.strftime(format)


@APP.route("/")
@APP.route("/<doc>")
def main(doc="resume"):
    title = doc.replace("-", " ").title()

    return render_template(f"{doc}.html", title=title, **data())


def data() -> dict[str]:
    default_data_abs_path = PROJECT_PATH/DEFAULT_DATA_REL_PATH
    data_abspath = Path(os.environ.get("RESUME_DATA", default_data_abs_path))

    with data_abspath.open("br") as toml_file:
        return dict(tomllib.load(toml_file))

if __name__ == "__main__":
    APP.run(debug=True)
