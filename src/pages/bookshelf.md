---
layout: page
title: Bookshelf
---

Keeping a record of and taking notes on books that I have read.

---

{% for book in collections.books %}
- [_**{{ book.data.title }}**: {{ book.data.subtitle }}_]({{ book.url }}) by {{ book.data.author }}
  {%- if not book.data.yearCompleted %} | <span class="pill">In Progress</span>{% endif %}
  {%- if book.data.rating %} | Rating <span aria-label="{{ book.data.rating }} stars">{% for i in range(0, book.data.rating) %}⭐️{% endfor %}</span>{% endif %}
{% endfor %}

<div style="height:1rem"></div>