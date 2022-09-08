---
layout: page
title: Sean McPherson
display:
    title: Hey, I'm Sean McP!
permalink: '/'
---

My name is **Sean McPherson**, and I'm a software engineer interested in all areas of front-end development: from HTML and CSS and JavaScript frameworks to mobile apps and developer tools.

Currently I work at Khan Academy building web and mobile applications in React and React Native. On the side, I like to work [on little projects](https://github.com/seanmcp) that [help make people's lives easier](/tools).

Outside of work, I enjoy spending time with my family (wife, two sons, and dog), playing and watching soccer, re-playing my favorite board games, and trying not to embarrass Jesus Christ.

## Recent Articles

{% set articles = collections.articles | head(-5) %}
{% include "partials/article-list.njk" %}

[View all articles](/articles/)

## Latest note

{% noteList { notes: collections.notes | head(-1) } %}

[View all notes](/notes/)