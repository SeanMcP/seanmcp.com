---
title: "\"Stop Teaching Code\" in JavaScript"
description: A quick review of Jeff Olson's article on teaching code with translated examples
date: 2019-11-26
tags:
    - teaching
    - programming
verse: Psalm 25:4-5
---

At some time in the future, I would like to return to the classroom to teach programming to middle school students. That is the age when I first starting coding, and I would love the opportunity to inspire the next generation of developers at an early age.

So I'm on the lookout for good techniques, strategies, and patterns for teaching the basics of computer science. [Hit me up if you have any](#comment-link).

Today I read ["Stop Teaching Code" by Jeff Olson](https://blog.upperlinecode.com/stop-teaching-code-a1039983b39) where he described a different approach to teaching programming. He advocated for ditching the definitions, unrealistic examples, and non-sensical names and use real-world puzzles for students to solve.

It's an interesting read, and I recommend it if you have any dreams of teaching programming.

All of the examples in Olson's article are in Python, but I plan on introducing students to code with JavaScript. So here are all of the examples from his article rewritten in JavaScript:

## Translated Examples

Note: I've linked to the nearest anchor on Medium, but they appear to be generated and might change. Your mileage may vary.

### 1. [Code for Predictions](https://blog.upperlinecode.com/stop-teaching-code-a1039983b39#511e)
```js
let name = "Tamara"

console.log("Hello" + name)
```

### 2. [Example 1: Conditionals](https://blog.upperlinecode.com/stop-teaching-code-a1039983b39#0f1e)

```js
let age = 15

if (age >= 18) {
    console.log("You're old enough to buy a ticket for an R-rated film.")
} else {
    console.log(`You'll be old enough in ${18 - age} years`)
}
```

### 3. [Example 2: Collections](https://blog.upperlinecode.com/stop-teaching-code-a1039983b39#147c)

```js
let favorite_foods = ["Sushi", "Tamales", "Mofongo", "Pizza", "Chicken Tikka"]

console.log(favorite_foods[2])
```

### 3. [Example 3: Objects](https://blog.upperlinecode.com/stop-teaching-code-a1039983b39#d814)

```js
let user1 = User("Ty", "Tdog@aol.com", 16, "Pa$$word")
let user2 = User("Sarai", "SMendes@hotmail.com", 15, "Kangaroo!")
let user3 = User("Osu", "Osu22@gmail.com", 12, "12345abcde")

console.log(user2.age)
```

---

I hope that helps. Happy coding!
