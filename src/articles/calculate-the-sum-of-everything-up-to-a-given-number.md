---
title: Calculate the sum of everything up to a given number
description: A little tool to calculate 5 + 4 + 3 + 2 + 1
date: 2022-04-23
tags:
  - math
  - wip
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

<div id="app">
<form id="settings">
    <label for="x">Number</label>
    <input id="x" min="1" name="x" type="number" value="10"/>
    <button>Calculate</button>
</form>
<div aria-live="polite" id="result"></div>
</div>
