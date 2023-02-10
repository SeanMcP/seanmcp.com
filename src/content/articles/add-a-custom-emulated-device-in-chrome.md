---
title: Add a custom emulated device in Chrome
description: Walking through the steps within the Google Chrome dev tools to better mimic your users' devices.
pubDate: 2022-02-05
tags:
    - Chrome
    - Dev Tools
verse:
# /img/<IMAGE>.min.jpg
image:
head: >-
    <style>
        main img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
        }
    </style>
---

Google Chrome provides a feature in the dev tools to emulate a device within the desktop browser. This is really helpful to get a quick preview of what a webpage will look like on different types and sizes of devices.

You can also add a custom emulated device that meets the specifications of your users. For example, if you work on a product that is primarily used by school students on Chromebooks, then it would be useful to have an emulated device that you could easily select.

To add a custom emulated device in Chrome, first [open the dev tools with your favorite method](../how-to-open-dev-tools).

![step 1: open the dev tools](/img/custom-emulated-device-1.png)

Then select toggle the device toolbar by clicking the phone/tablet icon or using the shortcut <kbd>ctrl</kbd>/<kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>m</kbd>.

![step 2: open the device toolbar](/img/custom-emulated-device-2.png)

Open the dropdown to see all of the default devices available in Chrome. To add a new one, select "Edit" at the bottom of the list.

![step 3: select to edit devices](/img/custom-emulated-device-3.png)

This should review a new dev-tools panel. Here you can select from a greater list of default devices. To add a new device, select "Add custom device...".

![step 4: select "add custom device"](/img/custom-emulated-device-4.png)

Next, input the dimensions for your custom device. I have two Chromebooks with two different window dimensions: 1366x649 and 1300x605. I'd rather test again the more extreme device, but you do whatever makes sense for you.

Make sure to select the correct user agent type! For a Chromebook, I'm going with "Desktop (touch)".

When you are done, select "Add".

![step 5: input device dimensions](/img/custom-emulated-device-5.png)

With your custom emulated device added, you can now selected it from the responsive device dropdown menu back on the far left.

The screenshot below illustrates just how different the real estate is for a Chromebook user compared to someone on a full-sized laptop or desktop:

![step 6: use your custom device](/img/custom-emulated-device-6.png)

With custom emulated devices, we can test to make sure that our webpages and applications will work well for all of our users.

Happy customizing!
