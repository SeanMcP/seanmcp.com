---
layout: "../../layouts/ArticleLayout.astro"
title: Make all properties required in TypeScript
description: Using the Required utility type to required all properties of a type
pubDate: 2020-12-19
tags:
  - TypeScript
verse:
# /img/<IMAGE>.min.jpg
image:
---

I have a type interface for shapes that looks something like this:

```ts
interface Shape {
  height?: number;
  width?: number;
}
```

Now I want to extend my interface for rectangles, but I want both `height` and `width` to be required. You can do that in TypeScript with a [`Required` utility type](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype).

`Required` takes a type and returns one with all required properties. You can use it by declaring a new `type` and passing the `Shape` interface:

```ts
type Rectangle = Required<Shape>;
```

Now when I try to create a new rectangle, I can use the `Rectangle` type to ensure that I provided all the required properties:

```ts
const rect: Rectangle = {
  height: 2,
  width: 4,
};
```

You can play around with these types in [this TypeScript playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8BQyRy6EwA5umAPwBcyIArgLYBG0A3IcQO7AAmYdHQYt2ULgF98+MAE8cyAEoQEYOCHIAbFAF5lEAI6NgUCPwA8GbBAB8MhAHsQAZzDIza+irUbte5AJiEjJKMHoAFgAabiI+QXR6AA58SSA), and [read more about Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) on the TypeScript website.

Happy requiring!
