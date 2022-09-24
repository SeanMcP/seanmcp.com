---
layout: "../../layouts/PageLayout.astro"
title: "Workshop: Publishing to npm"
---

## Overview

In this workshop, we will learn about node modules and npm, the JavaScript package registry. We will create a simple module and then publish for the world to see. We will then learn about releasing updated packages by converting our original code from JavaScript to TypeScript.

### Topics covered

- node modules
- npm
- `npm-cli`
- Private/public packages and scoping
- Build processes
- Semantic versioning

## Pre-requisites

In order to participate in this workshop, you need:

1. an npm account
2. `npm-cli` installed (comes with node.js)
3. a computer, and
4. a stable internet connection

## Part One

1. What is a node module?
2. Components
   - `package.json`
     - “name”
     - “version”
     - “main”
   - `README.md`
   - `index.js`
3. Making an simple module: `@<USERNAME>/utils`
4. Capitalize function
5. Testing our module
6. Preparing for release
   - `npm version major`
7. Publishing our module
8. Public scoped
    - "private"

## Part Two
1. TypeScript conversion
   - Rename and convert to TS
   - Add dev dependency: `npm i -D typescript`
   - Add `tsconfig.json`
     - “include”
     - “compilerOptions”
       - “target”
       - “module”
       - “declaration”
2. Plug-in TypesScript
   - Add “scripts” to package.json
     - “build”: “tsc”
   - Add “types” to package.json
3. `CHANGELOG.md`
4. Semantic versioning
5. Preparing for release
   - `npm version minor`
6. Publishing `v1.1.0`
