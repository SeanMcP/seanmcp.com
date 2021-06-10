---
layout: page
title: Sean McPherson
display:
    title: Hey, I'm Sean McP!
permalink: '/'
---

My name is **Sean McPherson**, and I'm interested in all areas of front-end development: from HTML and CSS to JavaScript frameworks and developer tools.

Currently I work at Niche.com in Pittsburgh, Pennsylvania building web and mobile applications in React. On the side, I like to work [on little projects](https://github.com/seanmcp) that help make people's lives easier like Toollama.com.

Outside of work, I enjoy spending time with my family (wife, two sons, and dog), playing and watching soccer, re-playing my favorite board games, and trying not to embarrass Jesus Christ.

## Latest note

{% set notes = collections.notes | head(-1) %}
{% include "partials/note-list.njk" %}

[View all notes](/notes/)

## Recent Articles

{% set articles = collections.articles | head(-5) %}
{% include "partials/article-list.njk" %}

[View all articles](/articles/)