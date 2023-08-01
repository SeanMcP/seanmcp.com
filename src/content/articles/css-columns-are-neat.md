---
title: CSS columns are neat
description:
  The columns property is CSS divides content among a set number or width of
  columns
tags:
  - CSS
pubDate: 2023-08-01T07:18:42.768-4:00
verse:
head: >-
  <style> div.example {
      border: 1px solid currentColor;
      font-size: small;
      padding: 1em;
  } </style>
---

I was looking for a solution to dynamically create two columns in a UI when I
came across the
[`columns` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/columns).
With a single property, you can tell the browser to split content evenly between
_n_ number of columns:

<div class="example stack()" style="columns: 2">

**Two columns**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare augue
placerat, malesuada nulla volutpat, pharetra arcu. Aenean consectetur diam in
justo interdum, eu pharetra purus congue.

Sed cursus porta lorem, non posuere ex sagittis nec. Nam pulvinar rutrum
condimentum. Proin sodales neque eget eros vulputate, vel hendrerit sem mollis.
Sed quis faucibus quam.

Etiam at enim id quam posuere feugiat non posuere est. Donec dictum lacus
posuere augue congue, ac tincidunt velit dignissim. Quisque hendrerit eros vel
erat ornare porta.

Nunc viverra enim dui, sit amet dapibus lacus mollis vel. Donec vitae lorem
sagittis, vulputate mauris a, posuere est. Nam nulla urna, laoreet in massa id,
finibus tincidunt risus.

Aliquam quam massa, varius ac dolor ac, pharetra hendrerit eros. Suspendisse at
facilisis leo, vel posuere dui. In hac habitasse platea dictumst. Proin congue
euismod metus quis dictum.

</div>

<div class="example stack()" style="columns: 3">

**Three columns**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare augue
placerat, malesuada nulla volutpat, pharetra arcu. Aenean consectetur diam in
justo interdum, eu pharetra purus congue.

Sed cursus porta lorem, non posuere ex sagittis nec. Nam pulvinar rutrum
condimentum. Proin sodales neque eget eros vulputate, vel hendrerit sem mollis.
Sed quis faucibus quam.

Etiam at enim id quam posuere feugiat non posuere est. Donec dictum lacus
posuere augue congue, ac tincidunt velit dignissim. Quisque hendrerit eros vel
erat ornare porta.

Nunc viverra enim dui, sit amet dapibus lacus mollis vel. Donec vitae lorem
sagittis, vulputate mauris a, posuere est. Nam nulla urna, laoreet in massa id,
finibus tincidunt risus.

Aliquam quam massa, varius ac dolor ac, pharetra hendrerit eros. Suspendisse at
facilisis leo, vel posuere dui. In hac habitasse platea dictumst. Proin congue
euismod metus quis dictum.

</div>

You can also set a certain width for the columns:

<div class="example stack()" style="columns: 10ch">

**`10ch` width**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare augue
placerat, malesuada nulla volutpat, pharetra arcu. Aenean consectetur diam in
justo interdum, eu pharetra purus congue.

Sed cursus porta lorem, non posuere ex sagittis nec. Nam pulvinar rutrum
condimentum. Proin sodales neque eget eros vulputate, vel hendrerit sem mollis.
Sed quis faucibus quam.

Etiam at enim id quam posuere feugiat non posuere est. Donec dictum lacus
posuere augue congue, ac tincidunt velit dignissim. Quisque hendrerit eros vel
erat ornare porta.

Nunc viverra enim dui, sit amet dapibus lacus mollis vel. Donec vitae lorem
sagittis, vulputate mauris a, posuere est. Nam nulla urna, laoreet in massa id,
finibus tincidunt risus.

Aliquam quam massa, varius ac dolor ac, pharetra hendrerit eros. Suspendisse at
facilisis leo, vel posuere dui. In hac habitasse platea dictumst. Proin congue
euismod metus quis dictum.

</div>

I don't come across many use cases for this magazine-style layout, but it's nice
to know that CSS has solution for it.
