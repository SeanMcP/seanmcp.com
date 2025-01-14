---
layout: page.liquid
title: Intro to Deno
description: This talk will introduce you to Deno, its features, and how it compares to Node.js. Then we'll illustrate some of those differences in a live demo.
type: lightning
---

## What is Deno?

- Pronounced "Den-o" or "Deen-o"
  - Logo is a dinosaur 🦕
- A new runtime for JavaScript/TypeScript
  - Supports TS out-of-the-box
- "Secure by default"
  - Permissions based
- Built-in utilities
  - Dependency inspection, formatting, _etc_.
  - Standard modules
  - From the creator of Node.js
    - Created as its successor

## Comparing Node and Deno

### Node

- V8-based runtime
- C++
- Callback-based API
- _De facto_ centralized module repository (npmjs.com)
- `package.json`
- `node_modules/`

### Deno

- V8-based runtime
- Rust
- Top-level async
- "De-centralized" module repository (github.com)
- `deps.ts`
- [Local cache](https://deno.land/manual/linking_to_external_code)

## Demo

Repo: https://github.com/SeanMcP/node-v-deno

## Summary

- Deno is a neat project with serious potential
- Opportunity to improve on Node.js
- Security is one of its defining features
- Ready option for utilities and personal projects
- Success depends on adoption
