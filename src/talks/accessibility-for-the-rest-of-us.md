---
layout: outline
title: Accessibility for the rest of us
description: This talk covers accessibility, why it's important, the WCAG standards, common accessibility tasks, and recommendations for building accessible products.
type: conference
slides: https://docs.google.com/presentation/d/1iSlV4b56TeXawKv_XlnixdsO1d4U7QScuMa5bNuTCqY/edit?usp=sharing
---

## Outline

### Intro

- Overview
  - Title and abstract
  - Learning objectives
  - Prerequisites
- About me
  - Not an expert
- Hook
  - You don't have to be an expert to create accessible
    applications
  - You just need to advocate for the user

### A11y

- A11y 101
  - Definition
  - Individuals with disabilities
  - Types of disabilities
- Why accessibility matters
  - Accessible products are better
    - Curb-cut effect
  - Accessibility is a legal requirement
    - Americans with Disabilities Act
    - UN Convention on the Rights of Persons with Disabilities
      (CRPD)
    - Domino's case
  - Accessibility is good for business
    - In the US, 12-20% of the population has a disability
    - Temporary disabilities could affect anyone
- WCAG
  - Definition
  - History (versions)
  - Rules with example
  - Levels of success
  - POUR

### POUR

- Perceivable
  > Information and user interface components must be presentable to users in ways they can perceive
  - Definition: Presenting all important content in ways that the user can consume.
  - Example
    - Alternative text for images
    - Captions for videos
    - Logical page structure
    - Sufficient color contrast
- Operable
  > User interface components and navigation must be operable
  - Definition: Ensure that our apps can be used with multiple forms of interaction
  - Example
    - Keyboard accessibility
    - Enough time to interact
    - Logical navigation via page structure
- Understandable
  > Information and the operation of user interface must be understandable
  - Definition: A user needs to be able to “read” the content, “scan” the elements, and know how to interact with the web page
  - Example
    - Readable content
    - Predictable appearance and interactions
    - Helpful instructions and error messages
- Robust
  > Content must be robust enough that it can be interpreted by by a wide variety of user agents, including assistive technologies
  - Definition: To be robust, your app must be accessible to all kinds of devices and technologies
  - Example
    - Cross-browser compatibility
    - Cross-platform compatibility
    - Valid HTML

### In action

- Common tasks
  - Maintaining page structure
    - Use semantic HTML
    - Layout within landmarks
    - Follow heading order
  - Enforcing color standards
    - Automated audits will flag contrast issues
    - Chrome and Firefox have contrast checking built into the dev tools
  - Managing focus
    - Use button and anchor tags
    - Manually focus elements
    - Structure the interface logically
  - Advocating for the user
    - Be the voice of whoever is not in the room
- Auditing
  - Automated (good)
    - `jsx-a11y`
    - `react-axe` & `vue-axe`,
    - Svelte
    - Axe & Wave browser extensions
    - Lighthouse CLI
  - Manual automation
    - Wave extension
    - axe extension
  - Manual (better)
    - "How to" by Google
- Recommendations
  - Advocate for a11y for your product
  - It is easier, cheaper, and quicker to prioritize a11y in the beginning
  - No new accessibility errors
    - If you don't have time to fix the issues now, commit to not making it worse
    - This will a) stop the bleeding, and b) get everyone thinking about accessibility
  - Add an accessibility task to every sprint
  - Audit early and often
    - Use linting an a code editor that will show you potential accessibility issues before you even commit
  - Build a11y checks into your QA CI/CD process

### Closing remarks

- Review learning objectives
- Tweetworthy: You don't have to be an expert to create accessible applications; you just need to advocate for the user
- Resources

## Key terms

- Accessibility
- Accessible
- Web Content Accessibility Guidelines (WCAG)

## References
- Americans With Disabilities Act of 1990. https://www.ada.gov/pubs/adastatute08.htm
- Deque. _Axe: Accessibility testing tools and software_. https://www.deque.com/axe/
- Dodson, Rob. _How to do an accessibility review_. Web Fundamentals. https://developers.google.com/web/fundamentals/accessibility/how-to-review
- Glover Blackwell, Angela. (2017). _The Curb-Cut Effect_. Stanford Social Innovation Review. https://ssir.org/articles/entry/the_curb_cut_effect
- GoogleChrome. _lighthouse_. GitHub. https://github.com/GoogleChrome/lighthouse
- Higgins, Tucker. (2019). _Supreme Court hands victory to blind man who sued Domino’s over site accessibility_. CNBC. https://www.cnbc.com/2019/10/07/dominos-supreme-court.html
- Matuzovic, Manuel. (2019). _Building the most inaccessible site possible with a perfect Lighthouse score_. https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/
- Melendez, Steven. (2019). _Ninth Circuit court: Domino’s pizza website is bound by ADA_. Fast Company. https://www.fastcompany.com/90293399/ninth-circuit-court-dominos-pizza-website-is-bound-by-ada
- W3C. (2018). _Web Content Accessibility Guidelines (WCAG) 2.1_. https://www.w3.org/TR/WCAG21/
- WebAIM. (2020). _The WebAIM Million_. https://webaim.org/projects/million/

<!-- ## To Reference -->
