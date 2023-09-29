import os
from pathlib import Path
import tomllib

from . import config


def data() -> dict[str]:
    default_data_abs_path = config.PROJECT_PATH/config.DEFAULT_DATA_REL_PATH
    data_abspath = Path(os.environ.get("RESUME_DATA", default_data_abs_path))

    with data_abspath.open("br") as toml_file:
        return dict(tomllib.load(toml_file))
