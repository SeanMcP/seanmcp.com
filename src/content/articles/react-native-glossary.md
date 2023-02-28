---
title: React Native Glossary
description: A growing list of terms you need to recognize when working in React Native
pubDate: 2021-10-07
tags:
  - Garden
  - Android
  - iOS
  - Mobile
  - React Native
verse: Psalm 19:14
---

Building applications with React Native requires a high-level understanding of mobile development on Android and iOS devices in addition to React and React Native fundamentals. This glossary of terms will serve as a helpful reference when working across these environments.

---

<!--
TERMS TO ADD:
- JDK
- JRE
-->

## AAB

Android App Bundles (AABs) are a new format for publishing applications on Android. AABs can contain multiple APKs. Since August 2021, Google Play requires AABs for new apps.

- [About Android App Bundles (Android)](https://developer.android.com/guide/app-bundle)

## APK

Android Package Kits (APKs) are an older format for publishing applications on Android.

## `build.gradle`

A `build.gradle` file contains all of the information for Gradle to compile Android apps, including dependency resolutions and tasks to process the source.

- [_What is a `build.gradle` file?_](../what-is-a-build-gradle-file)

## Gradle

Gradle is an automated build tool that is used to compile Android apps from source code. It is configured in `build.gradle` files and run through a wrapper: `gradlew`/`gradlew.bat`.

- [Gradle Build Tool](https://gradle.org/)
- [Gradle tutorial for complete beginners (YouTube)](https://www.youtube.com/watch?v=-dtcEMLNmn0)

## Hermes

Hermes is a mobile-optimized JavaScript engine that is included in React Native builds for Android and iOS.

- [Using Hermes (React Native)](https://reactnative.dev/docs/hermes)
- [What is Hermes in React Native?](/articles/what-is-hermes-react-native/)

## `Info.plist`

The information property list or `Info.plist` is an XML file that contains all of the configuration data for your application. You can update these values directly or through the Xcode UI.

- [About Info.plist Keys and Values (Apple)](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html)

## JavaScriptCore/JSCore

JavaScript Core or JSCore is a JavaScript engine that is included on iOS devices. It was included in Android builds to run JS code by React Native versions prior to `0.60`. It has since been replaced with [Hermes](#hermes).

- [JavaScriptCore (Apple)](https://developer.apple.com/documentation/javascriptcore)

<!--
## JRE

A Java Runtime Environment (JRE) is the code required to run a Java application. It contains all of the libraries and software that Java programs, and starts the Java Virtual Machine (JVM).

- [Java Runtime Environment (IBM)](https://www.ibm.com/cloud/learn/jre)
-->

## SDK

Software Development Kits (SDKs) are bundles of code to add to your application. Third parties will often have an SDK to integrate with their service.
