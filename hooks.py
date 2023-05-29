import tomllib
from pathlib import Path


def on_env(env, **kwargs):
    env.add_extension("jinja2.ext.debug")


def on_page_context(context, page, config, nav):
    project_path = Path(config["config_file_path"], "..")
    data_path = (project_path/"data/resume.toml").resolve()
    with data_path.open("br") as toml_file:
        data = tomllib.load(toml_file)

    context.update(data)

    return context
