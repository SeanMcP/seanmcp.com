---
title: "Python Reference"
description: A quick reference guide for working in Python
tendedDates:
  - 2024-02-17T09:25-0400
  - 2024-02-06T20:19-0400
verse: Isaiah 11:8
---

<table-of-contents></table-of-contents>

## Command-line arguments

Use `argparse` to configure command-line arguments:

```python
import argparse

VERSION = "1.0.0"

parser = argparse.ArgumentParser(description='Describe your CLI')
parser.add_argument("-v", "--version", action="version", version=f"lorem {VERSION}", help="print version and exit")
parser.add_argument("count", nargs="?", default=1, type=int, help="number of sentences to generate (default: 1)")

args = parser.parse_args()
count = args.count
```

[Read about `argparse`](https://docs.python.org/3/library/argparse.html)

## Catching exceptions

Use `try` and `except` to catch exceptions:

```python
try:
    # Code that might raise an exception
    if bad_condition:
        # Or throw your own
        raise Exception("Something went wrong")
except Exception as e:
    print(f"An error occurred: {e}")
```

## Formatting strings

Use f strings:

```python
name = "world"
print(f"Hello {name}!")
```

## Reading a file

Use `open` to read a file:

```python
with open("file.txt", "r") as file:
    contents = file.read()
```

Using `with` ensures the file is closed when the block is exited.

## Writing a file

Use `open` to write a file:

```python
with open("file.txt", "w") as file:
    file.write("Hello, world!")
```

Using `with` ensures the file is closed when the block is exited.

## Requirements files

To generate a `requirements.txt` file:

```bash
pip freeze > requirements.txt
```

To install dependencies from a `requirements.txt` file:

```bash
pip install -r requirements.txt
```
