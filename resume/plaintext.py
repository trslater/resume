
from contextlib import redirect_stdout
from io import StringIO

DATE_FMT = "%b %Y"


def plaintext(data):
    with redirect_stdout(StringIO()) as f:
        for _, method in data["contact"].items():
            print(method)

        print()
        print("EDUCATION")

        for program in data["education"]:
            print(program["title"])
            print(program["school"])
            print(program["city"])

            start_date = program['start_date'].strftime(DATE_FMT)
            end_date = program['end_date'].strftime(DATE_FMT)
            print(f"{start_date}–{end_date}")
            for highlight in program["highlights"]:
                print(f" - {highlight}")

        print()
        print("EXPERIENCE")

        for job in data["experience"]:
            print(job["position"])
            print(job["organization"])
            print(job["city"])

            start_date = job['start_date'].strftime(DATE_FMT)
            end_date = job['end_date'].strftime(DATE_FMT)
            print(f"{start_date}–{end_date}")
            for highlight in job["highlights"]:
                print(f" - {highlight}")

        for section in data["sections"]:
            print()
            print(section["title"].upper())
            for subsection in section["subsections"]:
                print(f" - {subsection['heading']}")
                for highlight in job["highlights"]:
                    print(f"    - {highlight}")

    return f.getvalue()
