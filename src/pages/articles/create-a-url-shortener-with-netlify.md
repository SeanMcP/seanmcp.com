---
layout: "../../layouts/ArticleLayout.astro"
title: Create a URL shortener with Netlify
description: Build your very own shortener in six quick steps
date: 2021-02-26
tags:
    - Netlify
verse: Luke 19:1-10
# /img/<IMAGE>.min.jpg
image:
---

After hearing of a few people doing the same, I set up a mostly-free URL shortener with Netlify: [smcp.dev](https://smcp.dev). Here's the steps I followed to get it done.

## 1. Register a domain

Go to your favorite registrar and buy a new domain. Aim for something short and memorable, and consider the `.link` TLD. I heard a recommendation for [Hover](https://hover.com), which seems pretty cool, but I went with Google Domains for smcp.dev.

This is the only step that costs money, and the amount will depend on the domain/TLD that you choose. `.dev` TLDs on Google Domains cost $12/year.

## 2. Create a repo

I modelled [my repo](https://github.com/seanmcp/smcp.dev) off of [`cassidoo/cass.run`](https://github.com/cassidoo/cass.run), which seems to be based off of [kentcdodds/netlify-shortener-example](https://github.com/kentcdodds/netlify-shortener-example). In order of importance, you have:

- a `_redirect` file that maps short urls to destinations,
- a `package.json` with a single (optional) dependency for adding links,
- a `README.md`,
- and some git stuff.

## 3. Add your project to Netlify

Login to Netlify (or create an account) and add a new project from git. Select your repository, and enter the following:

- **Build command**: Nothing
- **Publish directory**: Nothing

## 4. Setup your custom domain

In the main project view on Netlify, select "{% emoji '⚙️' %} Domain settings", then "Add custom domain". Enter the domain that you registered in step one and go through the flow.

You'll need to update the DNS settings with your registrar to point to Netlify's servers:

```
dns1.p05.nsone.net
dns2.p05.nsone.net
dns3.p05.nsone.net
dns4.p05.nsone.net
```

## 5. Wait

Depending on how quickly you went through steps 1-4, you may have to wait a few hours for everything to get setup from registrar and the DNS. For me, this took about thirty minutes, but your mileage may vary.

## 6. Enjoy

With all that in place, you should be able to use your URL shortener: [smcp.dev/yt](https://smcp.dev/yt)! To add a new URL, you can add a new line to the `_redirect` file manually or use the [`shorten` script](https://github.com/kentcdodds/netlify-shortener#usage)(if you added it)

---

Happy shortening!