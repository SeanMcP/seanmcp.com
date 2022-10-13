---
layout: "@layouts/ArticleLayout.astro"
title: Find an iOS simulator identifier
description: How to find a simulator ID using the Xcode UI or terminal
pubDate: 2021-10-04
tags:
    - iOS
    - macOS
    - Xcode
verse:
# /img/<IMAGE>.min.jpg
image:
---

When running a device simulator on macOS, it is possible to navigate that system's directly through the command line (or Finder, if you'd prefer). To do that, navigate to to the following directory:

```shell
cd /Library/Developer/CoreSimulator
```

If you look around in this directory, you will probably see a number of subdirectories with [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier). Each of these corresponds to a simulator device which contains all of the data for that instance. In order to browse a specific simulator's files, you need to know its ID.

There are two ways to find that, one using the Xcode UI and another using the terminal.

## Through Xcode

1. In the top menu, select "Window" > "Devices and Simulators"
   - You can use the shortcut <kbd>shift</kbd>+<kbd>command</kbd>+<kbd>2</kbd>.
2. In the left menu of the new window, select the "Simulators" tab
3. Select the device from the list below
   - **Note**: Make sure you match the device specs _and_ iOS version
4. Look for "Identifier:" in the main panel and copy the value

## Through the terminal

The following command require Xcode command-line tools, which you probably already have installed if you are running Xcode.

1. From anywhere on your system, run `xcrun simctl list devices`
2. Find the ID from the output by iOS version and device specs and copy the ID

If the device is already running, you can save yourself some time by passing a search argument:

```shell
# Show only running simulators
xcrun simctl list devices booted
```

That should surface the current simulator faster for copying.

## Take a look around!

Once you have the simulator ID copied, you can navigate there in the terminal with:

```shell
cd /Library/Developer/CoreSimulator/SIMULATOR-ID-THAT-YOU-COPIED
```

For example, if you want to look into a specific app's bundle, you can find that data within the simulator directory at `./data/Containers/Bundle/Application/APP-ID`. I have found this useful when debugging image paths in the final app bundle.

Happy browsing!