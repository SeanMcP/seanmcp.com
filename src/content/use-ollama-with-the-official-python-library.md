---
title: "Use Ollama with the official Python library"
description:
  Get started working with AI, Ollama, and large-language models in four steps
tags:
  - Articles
  - AI
  - Ollama
  - Python
date: 2024-02-21T13:06-0400
verse:
---

Ollama is a great way to get started with AI by using open-source and publically
available large-language models locally on your computer. I wrote previously
about
[how to get started with the experimental OpenAI API](/articles/get-started-prompt-engineering-with-local-llms),
but
[Ollama has a dedicated Python library](https://github.com/ollama/ollama-python)
that is even simpler.

1.  Install the library: `pip3 install ollama`
2.  Create a new python file: `touch completion.py`
3.  Add the following code to `completion.py`:

    ```python
    import ollama

    def get_completion(prompt, model):
        response = ollama.chat(model, messages=[{
            'role': 'user',
            'content': prompt,
        }])

        return response['message']['content']

    prompt = "What is the chief end of man?"

    print(get_completion(prompt, "mistral"))
    ```

4.  Run the file: `python3 completion.py`

There is more information available in the
[library repo on GitHub](https://github.com/ollama/ollama-python?tab=readme-ov-file#api),
including examples for streaming responses and a custom client. For even more
documentation on Ollama, check out the
[`/docs` directory in the main repo](https://github.com/ollama/ollama/tree/main/docs).
