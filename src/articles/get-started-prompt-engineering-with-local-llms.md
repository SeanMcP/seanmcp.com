---
title: "Get started prompt engineering with local LLMs"
description:
  Ollama makes it easy to run LLMs locally and provides experimental
  compatibility with OpenAI's APIs
tags:
  - Articles
  - AI
  - LLMs
  - Llama2
  - Ollama
  - Python
date: 2024-02-16T14:59-0400
verse:
---

Ollama is an application for running large-language models locally on your
computer. It gives you access to open-source LLMs that you can prompt directly
with the command line or an endpoint.

To getting started with local LLMs:

1. Download and install Ollama: https://ollama.com/download
2. When prompted, install the `ollama` CLI
3. Download and run your first LLM: `ollama run llama2`
4. Send your first prompt: “What is the chief end of man?”

The response will be printed to the console.

Using the CLI is nice, but a better option is to create and send prompts with a
scripting language. I'm going to use Python and OpenAI's chat completion API,
since that a popular combination. For an example with JavaScript,
[see this documentation](https://github.com/ollama/ollama/blob/main/docs/openai.md#openai-javascript-library).

1. Create a new python file: `touch completions.py`
2. Install the `openai` package: `pip3 install openai`
3. Set up your OpenAI client:

   ```python
   # completions.py
   from openai import OpenAI

   client = OpenAI(
        base_url="http://localhost:11434", # ll43a looks like llama
        api_key="ollama" # Unused but required
   )
   ```

4. Create your first completion:

   ```python
   # This function is not required, but it's nice to have
   def get_completion(prompt, model="llama2", temperature=0.0):
        messages = [{"role": "user", "content": prompt}]
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature,
        )
        return response.choices[0].message.content

   response = get_completion("What is the chief end of man?")
   print(response)
   ```

5. Run your script: `python3 completions.py`

That’s all it takes! For a good introduction to prompt writing, I recommend
DeepLearning.AI’s
[_ChatGPT Prompt Engineering for Developers_](https://learn.deeplearning.ai/chatgpt-prompt-eng/)
course.
