---
title: English words by consonant-vowel pattern
description: A tool to look up common words by their consonant-vowel pattern and resources for the rest
date: 2022-03-03T12:00-0400
tags:
- Reading
head: >-
    <script type="module" src="/js/consonant-vowel-patterns.js"></script>
    <style>
        consonant-vowel-patterns {
            border: 2px solid var(--accent-color);
            display: block;
            margin-block: 2rem;
            padding: 1rem;
        }
        consonant-vowel-patterns :is(form, label) {
            align-items: center;
            display: flex;
            gap: 0.5rem;
        }
        consonant-vowel-patterns :is(label, select) {
            flex: 1;
        }
        consonant-vowel-patterns output {
            display: grid;
            gap: 0.5rem;
            margin-block-start: 1rem;
        }
        consonant-vowel-patterns output:empty {
            display: none;
        }
        consonant-vowel-patterns ul {
            margin-block: 0;
            max-height: 8rem;
            overflow-y: auto;
        }
    </style>
---

When teaching people (or computers) to read, it's useful to group similar words into categories. One such grouping is by consonant-vowel patterns, which represent words by the letters that they contain.

With consonant-vowel patterns, we can put words like "bun", "cat", and "dip" into one bucket as "cvc" words; they are all made up of a consonant, followed by a vowel, and ending in a consonant.

I put together [a list of all English words sorted by their consonant-vowel pairs](https://github.com/SeanMcP/reading/tree/master/consonant-vowel-patterns). However, that is a long list to search through and I thought it might be nice to have a tool to look up shorter words by their consonant-vowel pattern.

<consonant-vowel-patterns>
    <form>
        <label>
            <b>Pattern</b>
            <select name="pattern"></select>
        </label>
        <button>Search</button>
    </form>
    <output></output>
</consonant-vowel-patterns>

The word list isn't perfect, but hopefully it will give you all of the data that you need for your use case! Let me know if you have any suggestions or run into any issues.

Happy reading!
