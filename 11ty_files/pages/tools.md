---
layout: page
title: Tools
head: >-
    <style>
        section[id]:not(:first-of-type) {
            margin-top: 5rem;
        }

        section h2 a::after {
            content: " #";
        }

        section h2 a:not(:hover,:focus) {
            color: initial;
            text-decoration: none;
        }

        section h2 a:not(:hover,:focus)::after {
            opacity: 0;
        }

        .tools-section ul {
            display: grid;
            gap: 1rem;
            list-style-type: none;
            margin: 1rem 0;
            padding: 0;
        }

        .tools-section ul a {
            align-items: center;
            display: grid;
            gap: 1rem;
            grid-template-columns: max-content 1fr;
            text-decoration: none;
            color: initial;
        }

        .tools-section ul a span:first-child {
            font-size: 2.5rem;
        }

        .tools-section ul a:hover b,
        .tools-section ul a:focus b {
            color: var(--anchor-color);
            text-decoration: underline;
        }

        @media screen and (min-width: 600px) {
            .tools-section ul {
                grid-template-columns: 1fr 1fr;
            }
        }
    </style>
---

{%- toolsSection { label: "Education", tools: tools.education } -%}
{%- toolsSection { label: "Games", tools: tools.games } -%}
{%- toolsSection { label: "Life", tools: tools.life } -%}
{%- toolsSection { label: "Fun", tools: tools.fun } -%}
