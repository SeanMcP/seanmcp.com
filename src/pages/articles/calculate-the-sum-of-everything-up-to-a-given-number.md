---
layout: "../../layouts/ArticleLayout.astro"
title: Calculate the sum of everything up to a given number
description: A little tool to calculate 5 + 4 + 3 + 2 + 1
pubDate: 2022-04-23
tags:
  - Math
  - Tools
verse:
# /img/<IMAGE>.min.jpg
image:
head: >-
  <style>
      #app {
          border: 1px solid var(--off-background);
          padding: 1rem;
      }
      #app :is(button, input) {
          background: transparent;
          border: 1px solid var(--off-background);
          color: inherit;
          font: inherit;
          padding: 0.25rem;
      }
      #app label {
          font-weight: bold;
      }
      #app button {
          background: var(--off-background);
      }
      #app #settings {
          align-items: center;
          display: flex;
          gap: 0.5rem;
      }
      #app #settings input {
          min-width: 3rem;
          flex-grow: 1;
      }
      @media screen and (max-width: 500px) {
          #app #settings {
              display: grid;
              grid-template-columns: min-content auto;
          }

          #app #settings button {
              grid-column: span 2;
          }
      }
      #app #result {
          font-size: 2em;
          font-weight: bold;
          overflow-x: auto;
          text-align: center;
      }
      #app #result[data-has-value] {
          padding-top: 0.5rem;
      }
  </style>
foot: >-
  <script src="/js/cumulative-sum-script.js"></script>
---

My wife showed me a Tik Tok series where someone was decluttering their life by getting rid of an increasing amount of items every day for 30 days. That's kind of hard to type out, but the idea was getting rid of one thing on day 1, then two things on day 2, _etc._ until tossing thirty things on day 30.

It was late a night, and we both struggled with the math of determining how many items this person would give away by the end of the experiment [^1]. Being an engineer, I set out the next day to create a little tool to calculate that for you.

Type in the number of steps (in our case 30 for thirty days), and select "Calculate" to see the sum:

<div id="app">
<form id="settings">
    <label for="x">Number</label>
    <input id="x" min="1" name="x" type="number" value="30"/>
    <button>Calculate</button>
</form>
<div aria-live="polite" id="result"></div>
</div>

I remember seeing something similar when I was in college and folks would try to raise support to go on a mission trip. They would have a board with every number from 1 to 100 (or so) and try to find people who are willing to donate that amount. With this calculator, you should be able to figure out how long your support board needs to be with some guess and check.

Hopefully this helps someone else.

Happy counting!

[^1]: Spoiler: It's 435 items
