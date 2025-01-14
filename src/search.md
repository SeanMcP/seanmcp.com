---
layout: page.liquid
eleventyExcludeFromCollections: true
title: Search
foot: >-
  <script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>
  <script type="module" src="/js/fuzzy-search.js"></script>
---

<fuzzy-search>
<form>
    <input
        aria-label="Search for content"
        autofocus
        name="q"
        placeholder="Search for content"
        type="search"
    >
    <button>Search</button>
</form>

<datalist id="collections-all">

{% for item in collections.all | remove_flagged_in_prod %}
{%- if item.data.title -%}

<option
    data-datetime="{{item.data.date}}"
    data-description="{{item.data.description | escape}}"
    data-readable-date="{{item.data.date | readable_date}}"
    data-title="{{ item | render_title | escape }}"
    data-tags="{{item.data.tags | join: ","}}"
    value="{{item.url}}"
></option>
{%- endif -%}
{% endfor %}

</datalist>

<output></output>
{%include "article-list" %}

<!-- sync: article-list-item.liquid -->
<template>
<li class="article-list-item">
    <a href="%URL%">%TITLE%</a><time datetime="%DATETIME%">%READABLE_DATE%</time>
</li>
</template>
<!-- endsync -->

</fuzzy-search>

<style>
    fuzzy-search form {
        display: flex;
        gap: 0.5rem;
    }
    fuzzy-search form input {
        flex: 1;
    }
    fuzzy-search form button {
        background-color: var(--accent-color);
        border-color: var(--accent-color);
        color: var(--bg-color);
    }
    fuzzy-search output {
        margin-block-start: 1rem;
    }
</style>
