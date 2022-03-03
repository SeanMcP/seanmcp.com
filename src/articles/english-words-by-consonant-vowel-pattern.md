---
title: English words by consonant-vowel pattern
description:
date: 2022-03-03
tags:
  - reading
verse:
# /img/<IMAGE>.min.jpg
image:
head: >-
  <style>
        #app {
            border: 1px solid var(--off-background);
            display: grid;
        }
        #app li[value="0"] {
            list-style-type: none;
            text-align: center;
        }
        #app li a {
            display: block;
            font-size: small;
            text-align: center;
        }
        #pattern-form {
            border-bottom: 1px solid var(--off-background);
            display: grid;
            gap: 0.5rem;
            padding: 1rem;
        }
        #pattern-form :is(button, select) {
            border-radius: 0;
            border: 1px solid var(--off-background);
            font: inherit;
            padding: 0.25rem 0.5rem;
        }
        #pattern-form button {
            background-color: var(--text-color);
            border: 0;
            border-radius: 0;
            color: var(--background);
            justify-self: end;
        }
        #app h2 {
            font-size: 1.5rem;
            margin-top: 0;
        }
        #results-list {
            margin-bottom: 0;
            margin-top: 0;
            max-height: 8rem;
            overflow-y: auto;
            padding-bottom: 1rem;
            padding-top: 1rem;
        }
  </style>
foot: >-
  <script src="/js/cvp-script.js"></script>
---

When teaching people (or computers) to read, it's useful to group similar words into categories. One such grouping is by consonant-vowel patterns, which represent words by the letters that they contain.

With consonant-vowel patterns, we can put words like "bun", "cat", and "dip" into one bucket as "cvc" words; they are all made up of a consonant, followed by a vowel, and ending in a consonant.

I put together [a list of all English words sorted by their consonant-vowel pairs](https://github.com/SeanMcP/reading/tree/master/consonant-vowel-patterns). However, that is a long list to search through and I thought it might be nice to have a tool to look up shorter words by their consonant-vowel pattern.

<section id="app">
<form id="pattern-form">
<label for="pattern">
Consonant-vowel pattern
</label>
<select id="pattern" name="pattern">

{% for pattern in cvp %}
<option value="{{ pattern }}">{{ pattern }}</option>
{% endfor %}
</select>
<button>Search</button>
</form>
<ol id="results-list">
</ol>
</section>

The word list isn't perfect, but hopefully it will give you all of the data that you need for your use case! Let me know if you have any suggestions or run into any issues.

Happy reading!
