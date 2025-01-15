---
title: What is the file limit for GTPs?
description: As of November 15, 2023, the limit is 10 files.
tags:
- AI
- GPTs
date: 2023-11-15T09:23-0400
verse: Psalm 33:2
---

**As of 11/15/2023, the limit is 10 files.**

Although you wouldn't know it if you tried to upload more. The UI lets you
upload more than 10 files, but you get an unhelpful "draft failed to save"
message.

If you inspect the network requests, you'll see a 🔴 400 to
` https://chat.openai.com/backend-api/gizmos` with the following response:

```
{"detail":"Cannot upload more than 10 files"}
```

Hopefully OpenAI surfaces that error message in the UI soon. In the meantime:
keep your file count to 10 or fewer.
