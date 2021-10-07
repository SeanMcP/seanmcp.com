---
title: React Native Glossary
description: A growing list of terms you need to recognize when working in React Native
date: 2021-10-07
tags:
  - garden
  - android
  - ios
  - mobile
  - react-native
verse: Psalm 19:14
# /img/<IMAGE>.min.jpg
image:
---

Building applications with React Native requires a high-level understanding of mobile development on Android and iOS devices in addition to React and React Native fundamentals. This glossary of terms will serve as a helpful reference when working across these environments.

---

<!--
TERMS TO ADD:
- build.gradle
- Gradle
- JDK
- JRE
-->

## AAB

Android App Bundles (AABs) are a new format for publishing applications on Android. AABs can contain multiple APKs. Since August 2021, Google Play requires AABs for new apps.

- [About Android App Bundles (Android)](https://developer.android.com/guide/app-bundle)

## APK

Android Package Kits (APKs) are an older format for publishing applications on Android.

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
