---
layout: page.liquid
title: Tools
description: A growing set of tools to help make your life a little easier.
---

## Education

{% for tool in tools.education %} {% include "tool-list-item" %} {% endfor %}

## Games

{% for tool in tools.games %} {% include "tool-list-item" %} {% endfor %}

## Life

{% for tool in tools.life %} {% include "tool-list-item" %} {% endfor %}

## Fun

{% for tool in tools.fun %} {% include "tool-list-item" %} {% endfor %}
