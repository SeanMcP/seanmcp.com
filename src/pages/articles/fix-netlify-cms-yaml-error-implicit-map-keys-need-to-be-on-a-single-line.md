---
layout: "../../layouts/ArticleLayout.astro"
title: Fix Netlify CMS YAML error 'Implicit map keys need to be on a single line'
description: Make sure that your configuration file is being copied to the destination directory.
pubDate: 2021-03-25
tags:
    - Debugging
    - Error
    - Netlify
verse:
# /img/<IMAGE>.min.jpg
image:
---

When trying to setup Netlify CMS on a project, I kept getting this error on the `/admin` page:

```
Error loading the CMS configuration
Config Errors:

YAMLSemanticError: Implicit map keys need to be on a single line at line 1, column 1:

<!DOCTYPE html>
^^^^^^^^^^^^^^^…

Check your config.yml file.
```

I checked and doubled checked the YAML in my `config.yml` file, and everything was valid. I went through the Netlify Identity steps to verify that they were followed correctly, but that didn't help either.

Googling the error message brought up nothing useful.

Then it occurred to me: "What if Netlify CMS isn't getting the config file at all?"

Sure enough, my static-site generator was skipping the unrecognized `.yml` file when building the site. I added the configuration to copy that file to the build folder, and _voilà_: everything works as expected.

So if you are getting the same error, check to make sure that the `config.yml` file is making it to your built `admin/` directory.

Happy debugging!
