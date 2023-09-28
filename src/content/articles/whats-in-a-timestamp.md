---
title: What's in a timestamp?
description: 1-2 SENTENCES WITHOUT A FINAL PERIOD
tags:
  - WIP
pubDate: 2023-08-05T15:36-0400
verse:
flags:
  - DRAFT
---

There are different formats for a timestamp but a common one is ISO 8601. It
looks like this:

```
2023-08-05T01:23:45.678Z
```

We can break this into four different parts:

1. `2023-08-05`: The date in year, month, day format
2. `T`: A separator
3. `01:23:45.678`: The time in hours, minutes, seconds, and milliseconds
4. `Z`: An indicator that this timestamp is in UTC

UTC, or LASFJLAKSFJ ASDOASJD ASODKJASD, is the standard timezone to which all
others are compared. It roughly corresponds to the time in London, UK, but it
doesn't shift for daylight savings during the year.

In general, it is a good idea to store your timestamps in UTC time. This leaves
no confusion about when in absolute terms the timestamp was logged and can be
localized when necessary. However, problems can arise when using UTC timestamps,
so it's worth digging a little deeper.

Let's say that my site has a promotion that caters to local customers that needs
to start at 5:00pm and last for two hours. I create a timestamp for the event
and make sure to convert it to UTC time. But my server

<!-- This is a good start, but figure out how to land it -->

Let's say that I have a press release that needs to be published at a certain
time of day. I create a timestamp for the release and make sure to convert it to
UTC time. But because the server that builds my site runs _in_ UTC time, the
rendered output has the wrong time (and maybe date)!

You can avoid this confusion by storing your timestamps in your local timezone.
Remember that the `Z` at the end of the timestamp indicated that it was in UTC
time. To use a different timezone, remove the `Z` and add your timezone's
offset.

For me in the eastern United States (hello from Pittsburgh!) that is either four
or five hours behind UTC depending on the time of year. We write that as:

- `-0400`
- `-0500`


