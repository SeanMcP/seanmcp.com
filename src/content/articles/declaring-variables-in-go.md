---
title: Declaring variables in Go
description:
  You can declare variables with var, :=, and const depending on your use case
tags:
  - Go
pubDate: 2023-05-12
verse: Romans 3:28
---

There are three ways to declare variables in Go: `var`, `:=`, and `const`.

The `var` keyword is the standard method for declaring a variable. It can be
used anywhere in your program, with a value or without:

```go
var s1 string = "Hello"

func main() {
	var s2 = "World"
	var s3 string
	s3 += "!"
}
```

Variable declarations without a value require a type (`s3` above), but types are
otherwise optional.

**Declare a variable with with `var` when you need a variable at the top-level
of your program or want to initialize it with no value.**

The short-declaration operator, `:=`, works like the `var` keyword for declaring
variables with three differences: a) it can only be used within the scope of a
function, b) it cannot initialize an empty variable, and c) it does not accept a
type. Of the `var` examples above, only one could be replaced with a `:=`:

```go
// s1 := "Hello" // Outside of function scope

func main() {
	s2 := "World"
	// s3 := // No empty variables
}
```

These may sounds like significant limitations, but most of your program will be
written inside a function’s scope and rarely do variables need to be declared
without a value. So the benefit of using `:=` comes from letting Go infer the
type of your variable so that you can focus on the code.

**Declare a variable with `:=` when you are working within a function with
initial values.**

The `const` keyword tells the compiler that the variable is a constant -- it
will not be changed or reassigned. Like `var` it can be used anywhere in your
program but can only be used with some types: `boolean`, `float64`, `int`, and
`string`.

```go
const PI float64 = 3.14159
```

If you try to use `const` with other types like a `slice`, then you will get a
compiler error:
`(value of type []string) is not constant compiler(InvalidConstInit)`

**Declare a variable with `const` when you know that it will not change
throughout your program.**

I am new to learning and writing in Go, but in practice I almost exclusively use
the declaration operator, `:=`, for declaring variables. But it’s useful to know
the reasons when and why you should reach for `var` or `const`.
