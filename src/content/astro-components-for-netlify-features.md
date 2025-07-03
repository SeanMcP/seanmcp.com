---
title: Astro components for Netlify features
description:
  Announcing astro-netlify-components, a library for using Netlify features in
  your Astro projects.
tags:
  - Articles
  - Astro
  - Netlify
  - Open Source
date: 2022-11-25T07:26-0400
---

This morning, I released the first version of
`astro-netlify-components`,[a library of Astro components for Netlify](https://npm.im/astro-netlify-components).
I was about to start dogfooding the functionality in my own site, and I figured
I might as well share it with the world.

There are two exported component at launch:

- `<Form>`: adds all the of the markup for
  [Netlify Forms](https://docs.netlify.com/forms/setup/) with types and
  validation
- `<CMS>`: a full-page component to render the
  [Netlify CMS](https://www.netlifycms.org/) admin interface

To add either component to your, add the package to your project:

```bash
npm i astro-netlify-components
```

Then, import the components and use in your Astro page:

```astro
---
import CMS from "astro-netlify-components/CMS.astro";
import Form from "astro-netlify-components/Form.astro";
---
```

`CMS` renders a full page, so import and invoke it on a page of its own:

```astro
---
// src/pages/admin.astro
import CMS from "astro-netlify-components/CMS.astro";
---

<CMS />
```

`Form` expects children, so you could set up a contact form on your site like
this:

```astro
---
// src/pages/contact.astro
import Form from "astro-netlify-components/Form.astro";
---

<Form name="contact">
  <label>
    <b>Name</b>
    <input type="text" name="name" required />
  </label>
  <label>
    <b>Email</b>
    <input type="email" name="email" required />
  </label>
  <label>
    <b>Message</b>
    <textarea name="message" required></textarea>
  </label>
  <button>Submit</button>
</Form>
```

---

If you want to give it a try, make sure to
[checkout the documentation](https://github.com/seanmcp/astro-netlify-components)
and
[file any issues you encounter](https://github.com/seanmcp/astro-netlify-components/issues).

Happy coding!
