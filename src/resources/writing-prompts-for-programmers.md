---
title: Writing Prompts for Programmers
description:
  A list of software-engineering focused writing prompts to help programmers get
  started writing
updatedDate: 2023-07-05T10:51-0400
date: 2023-07-04T10:51-0400
verse: Proverbs 3:3
head: >-
  <style> li[data-highlighted] {
    background-color: yellow;
  } </style>
foot: >-
  <script type="module"> customElements.define("random-prompt", class
  RandomPrompt extends HTMLElement {
    constructor() {
      super();
      this.items = this.querySelectorAll("li");
    }
    connectedCallback() {
      const button = document.createElement("button");
      button.textContent = "Select a random prompt";
      button.addEventListener("click", e => {
        e.preventDefault();
        const randomIndex = Math.floor(Math.random() * this.items.length)
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i];
          if (i === randomIndex) {
            item.setAttribute("data-highlighted", "true");
          } else {
            item.removeAttribute("data-highlighted");
          }
        }
      })
      this.prepend(button);
    }
  }) </script>
---

> The most effective way I know to improve your writing is to do freewriting
> exercises regularly. --
> [Peter Elbow](https://www.research.ucsb.edu/sites/default/files/RD/docs/FREEWRITING-by-Peter-Elbow.pdf)

## Prompts

<random-prompt>

- What is a tool that you have been using lately?
- What tool would you miss the most if it were to disappear?
- What is the first thing that you look to do when setting up a new computer?
- What is a process that has been painful recently? How might you fix it?
- What is a product that you think should exist?
- What is a programming pattern that you have been appreciating lately?
- What is a programming pattern that you have been avoiding lately?
- Is there any value in bikeshedding? Why or why not?
- How would you compare two solutions to a problem?
- What are three strategies for reversing a list of strings?

</random-prompt>

## How to use these prompts

These prompts were curated for freewriting, an exercise to help you get started
writing. To start, follow these steps:

1. Pick a prompt that piques your interest
2. Grab a pen and paper or open a text editor
3. Set a timer for 5, 10, or 15 minutes
4. Write until the timer goes off

Once you are done, it's up to you: stop or continue, discard or publish. The
goal was to write and strengthen those muscles, and you've succeeded!
