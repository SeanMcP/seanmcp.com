---
layout: "../../layouts/ArticleLayout.astro"
title: What is a build.gradle file?
description: An brief explanation of Gradle and build.gradle files for JavaScript developers
date: 2021-11-04
tags:
  - Android
  - Gradle
  - Mobile
  - React Native
verse: Psalm 127:1
# /img/<IMAGE>.min.jpg
image:
---

When working on a React Native app, you will probably make some changes to the `build.gradle` file in your projects `android/` directory. This file is the core component of your build process and has all of the instructions necessary to compile an Android app from source.

Your `build.gradle` file is read and executed by [Gradle](https://gradle.org/), an automation tool that is popular in Java development. Gradle's job is to resolve the dependency tree of your application and run everything through the Java compiler to generate code that can be run in the Java Virtual Machine (JVM). All of that work is divided in to tasks that can be mixed and matched as needed.

The nearest equivalent in the world of web development might be [Gulp, a composable task runner](https://gulpjs.com/),, or perhaps [Webpack, a bundler](https://webpack.js.org/). But `build.gradle` also manages dependencies, so mix a little bit of `package.json` in there too. Essentially, `build.gradle` is the main configuration file for your Android project.

When you look at [a `build.gradle` file](https://github.com/facebook/react-native/blob/main/template/android/build.gradle) through the lens of a web developer, it looks like a bunch of nested objects with a few method calls. However, that is completely wrong!

`build.gradle` files are often written in [Groovy, which is its own Java-based programming language](https://groovy-lang.org/). What looks like an object declaration in JavaScript is actually a function call in Groovy. Let's take a look at the following block:

```groovy
repositories {
    google()
    maven { url 'https://www.jitpack.io' }
}
```

Here we are calling the `repositories` function and passing a closure, identified by the curly brackets `{}`. Within that closure, we are calling more functions: `google` with no parameters, and `maven` with another closure and another function `url`.

I'm still working to wrap my head around closures, but the takeaway here is that there is more going on that you might first assume.

The best part about using a programming language for a build configuration file is that you can add variables and functions as needed. Variables and functions can be defined with the `def` keyword customize the build process:

```groovy
def version = "1.2.3"

def customFunction() {
    println "Building v${version}!"
}

customFunction()
```

The last bit of information you should know about `build.gradle` is that all of the tasks are executed via a wrapper. This is the executable `gradlew` (Linux/Mac) or `gradlew.bat` (Windows) file that is included in your project. By running everything through the wrapper, you remove the need to have Gradle installed on your computer.

To start the build task, run the following in your terminal:

```shell
./gradlew build
```

Hopefully that demystifies the `build.gradle` file in your Android/React-Native project a little bit. This is not yet my area of expertise, so [please let me know](#comment-link) if I need to make any corrections.

Happy building!
