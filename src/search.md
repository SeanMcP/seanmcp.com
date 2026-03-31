---
layout: page.liquid
eleventyExcludeFromCollections: true
title: Search
foot: >-
  <script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script> <script
  type="module" src="/js/fuzzy-search.js"></script>
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
    data-category="{{item.data.tags[0]}}"
    data-category-url="/{{item.data.tags[0] | slug}}"
    value="{{item.url}}"
></option>
{%- endif -%}
{% endfor %}

</datalist>

<output></output> {%include "page-list" %}

<!-- sync: page-list-item.liquid -->
<template>
<li class="page-list-item" data-category="%CATEGORY_DATA%">
    <div class="page-list-item__meta">
        <time datetime="%DATETIME%">%READABLE_DATE%</time>
        <i>in</i>
        <a class="page-list-item__category" href="%CATEGORY_URL%">%CATEGORY%</a>
    </div>
    <a class="page-list-item__title" href="%URL%">%TITLE%</a>
    <div>%DESCRIPTION%</div>
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
        color: var(--bg);
    }
    fuzzy-search output {
        margin-block-start: 1rem;
    }
</style>
