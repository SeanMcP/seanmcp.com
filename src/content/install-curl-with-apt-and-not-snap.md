---
title: Install curl with apt (and not snap)
description: When trying to install Node, I encountered an issue that was resolved by installed curl with apt.
date: 2025-08-25T07:50-0400
tags:
  - Articles
  - Linux
  - Node
flags:
verse: Jeremiah 33:3
prose: true
---

After switching my desktop to Linux from Windows^[My build was incompatible and Windows 11, and I didn't want to upgrade to use an operating system that I am ambivalent about.], I ran into an issue installing Node. The official directions recommend using `nvm`, but the `nvm install 24` command was failing with a lack of permissions:

```
Downloading and installing node v24.6.0...
Downloading https://nodejs.org/dist/v24.6.0/node-v24.6.0-linux-x64.tar.xz...
Warning: Failed to open the file /home/seanmcp/.nvm/.cache/bin/node-v24.6.0-linux-x64/node-v24.6.0-linux-x64.tar.xz: Permission denied
curl: (23) client returned ERROR on write of 1360 bytes

download from https://nodejs.org/dist/v24.6.0/node-v24.6.0-linux-x64.tar.xz failed
grep: /home/seanmcp/.nvm/.cache/bin/node-v24.6.0-linux-x64/node-v24.6.0-linux-x64.tar.xz: No such file or directory
Provided file to checksum does not exist.
Binary download failed, trying source.
Downloading https://nodejs.org/dist/v24.6.0/node-v24.6.0.tar.xz...

Warning: Failed to open the file /home/seanmcp/.nvm/.cache/src/node-v24.6.0/node-v24.6.0.tar.xz: Permission denied
curl: (23) client returned ERROR on write of 1360 bytes

download from https://nodejs.org/dist/v24.6.0/node-v24.6.0.tar.xz failed
grep: /home/seanmcp/.nvm/.cache/src/node-v24.6.0/node-v24.6.0.tar.xz: No such file or directory
Provided file to checksum does not exist.
```

The permissions in the `.nvm/.cache/` directory looked fine, [`sudo` didn't work](https://xkcd.com/149/), and Claude Sonnet 4 wasn't helpful. I went searching online and found [a question and answer from three years ago](https://askubuntu.com/a/1489138) that recommended:
1. Uninstalling `curl` with snap: `sudo snap remove curl`
2. Reinstalling `curl` with apt: `sudo apt install curl`
3. Running the nvm/Node install commands again

Doing that fixed the issue for me.

I would have never considered `curl` as possible source of my issues. So I'm thankful that questions/answers like that exist on the internet.

I think I need to learn about the differences between apt and snap, and why you would choose one versus the other. If you have a good resources for that, please let me know.
