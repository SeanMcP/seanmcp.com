---
layout: "../../layouts/ArticleLayout.astro"
title: Store readable data
description: When forced between storing data for humans or computers, choose the former.
pubDate: 2020-05-11
tags:
  - Programming
verse:
---

Imagine that you want to store data to look up the continent for every country in the world. The best data structure for this is a object/map/dictionary to quickly access the value without looping. I'll use the former for my examples:

Your object map will look something like this:

```
{
    "Algeria": "Africa",
    "Angola": "Africa",
    "Benin": "Africa,
    // ...
}
```

This is well and good, but you'll notice one bit of data is repeated: continent. Any time you have the same bit of data repeated, you run the risk of typing it incorrectly: `"Africa" != "Afrcia"`. This is smell number one.

But let's ignore that for now. We want to include all of the countries in the world, so let's add a few more:

```
{
    "Afghanistan": "Asia",
    "Algeria": "Africa",
    "Argentina": "South America",
    "Armenia": "Asia",
    "Azerbaijan": "Asia",
    "Angola": "Africa",
    "Benin": "Africa,
    "Bolivia": "South America",
    "Brazil": "South America",
    // ...
}
```

As this structure grows to accommodate all of our data, it becomes less for humans and therefore less maintainable.

South America has 3 countries and/or territories that start with "B"... do we have them all? It's possible to answer that question, but it's not easy. This is is smell number two.

Instead of continuing down this path, let's go back to the drawing board.

## Best for whom?

Our decision in choosing a data structure was to do what is best _for the computer_. Objects are a quick and easy way to retrieve the information that we need.

But in making that decision, we assumed that the best option was what is best for the computer. Instead, what if we stored data in the way that is best _for the human_ maintaining it?

We would still start with an object/map/dictionary, but countries wouldn't be at the top level:

```
{
    "Africa": [
        "Algeria",
        "Angola",
        "Benin",
        // ...
    ],
    // ...
}
```

Instead we would put continents first. Why? Because our brains like to organize the information we encounter into useful groups. In this scenario, the most useful arrangement for counties is by continent.

With this approach, we made it easier to read and maintain, and removed duplicated data.

However, this structure is harder for the computer to read. So before we start this loop over again, let's add one more bit of code: a transformer.

## Transformer

This is a function that will take our data in a particular format and "transform" it into another. In our example, it will turn our human readable code and turn it into computer usable code.

The implementation of this particular function isn't important, so just focus on the input and output:

```
humanReadable = {
    "Africa": [
        "Algeria",
        "Angola",
        "Benin",
    ]
}

computerUsable = {
    "Algeria": "Africa",
    "Angola": "Africa",
    "Benin": "Africa",
}

transformer(humanReadable) = computerUsable
```

If we run the transformer once at the beginning of our code, we now have the readibility of the first structure _and_ the usability of the second.

So store readable data. You, or the developer after you, will thank you for it.

Happy coding!
