---
layout: page.liquid
title: Art
description: Artwork by Sean McPherson
head: >-
  <style>
    article {
      text-align: center;

      img {
        background: white;
        border: var(--stroke-width) solid hsla(0, 0%, 0%, 0.1);
        padding: 1rem;
        margin-block-end: 1rem;

        &[pixelated] {
          image-rendering: pixelated;
          min-width: 50%;
        }
      }

      time {
        margin-block-start: 0.25rem;
      }

      & + article {
        margin-block-start: 10rem;
      }
    }
  </style>
---

{% for piece in art %}

<article>
    <img {% if piece[4] %}pixelated{% endif %} alt="{{piece[2]}}" src="/art/{{piece[1]}}" />
    <h2>{{piece[2]}}</h2>
    <time datetime="{{piece[0]}}">{{piece[0] | readable_date }}</time>
</article>

{% endfor %}
