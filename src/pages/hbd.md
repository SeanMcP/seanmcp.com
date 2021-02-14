---
eleventyExcludeFromCollections: true
layout: layouts/tabula-rasa.njk
title: Happy Birthday, Dad!
head: |
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"> 
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎂</text></svg>">
  <style>
      body {
          font-family: "Noto Sans", Arial;
          font-size: 200%;
          margin: 0;
      }
      main {
          display: flex;
          flex-direction: column;
      }
      .direct-link {
          display: none;
      }
      .block {
          align-items: center;
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 40px);
          justify-content: center;
          padding: 20px;
          text-align: center;
      }

      .block > * {
          max-width: 800px;
      }

      .block > *:not(:last-child) {
          margin-bottom: 2rem;
          margin-top: 0;
      }

      .block:nth-of-type(3n + 1) {
          background-color: darkgreen;
          color: white;
      }

      .block:nth-of-type(3n + 2) {
          background-color: darkblue;
          color: white;
      }

      .block:nth-of-type(3n + 3) {
          background-color: firebrick;
          color: white;
      }

      .block > iframe {
          width: 100%;
      }

      .scroll-indicator {
          bottom: 0;
          color: white;
          opacity: 0.5;
          position: fixed;
          text-align: center;
          width: 100%;
      }
  </style>
---

<p class="scroll-indicator">{% emoji "👇" %} Scroll {% emoji "👇" %}</p>

<section class="block">

# {{ title }}

Congrats on making it to 60! {% emoji "🤯" %}

</section>

<section class="block">

## In 1961

A top single was _Take Good Care of My Baby_ by Bobby Lee {% emoji "🎧" %}

<iframe width="560" height="315" src="https://www.youtube.com/embed/PQHctzecBn4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</section>

<section class="block">

## In 1961

A loaf of bread cost $0.22 {% emoji "🍞" %}

</section>

<section class="block">

## In 1961

A gallon of gas was $0.30 {% emoji "⛽️" %}

</section>

<section class="block">

## In the 1960s

**Todd** was the 31st most popular baby name for boys.

**Tod** didn't make the list {% emoji "😂" %}

</section>

<section class="block">

## A lot has happened since you were born

Moon landings, microwave ovens, microwave dinners, the internet, and **three boys**!

Plus a bunch of other stuff {% emoji "😉" %}

</section>

<section class="block">

## Thanks for sticking around to be my dad

Your gift is _en route_ but may take a few days (\*cough\* weeks) to arrive {% emoji "😬" %}

Until then, enjoy this e-card as a temporary birthday gift!

</section>

<section class="block" style="background-color:#333">

## The End

</section>
