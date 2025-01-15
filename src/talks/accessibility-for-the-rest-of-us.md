---
layout: page.liquid
title: Accessibility for the rest of us
description: This talk covers accessibility, why it's important, the WCAG standards, common accessibility tasks, and recommendations for building accessible products.
type: conference
slides: https://docs.google.com/presentation/d/14F7lQGfeGwnBtroKrB02uG9H13b6AAaIYOM0tb8Vls4/edit?usp=sharing
---

## Outline

1. Introduction
   1. Greeting
   2. Learning objectives
      1. What is accessibility
      2. Why accessibility matters
      3. Accessibility standards
      4. Accessibility principles
      5. Common tasks
      6. Best practices
   3. About Me
   4. Talk disclaimer
      1. I'm not an expert
      2. But you don't need to be an expert
      3. This is going to be what everyone can do to make accessible products
2. What is accessibility
   1. Definition
   2. Illustration
   3. Connection to disabilities
   4. Categories
   5. Summary: Accessibility is about making products that work for everyone
3. Why accessibility matters
   1. Better overall
   2. Reach more users
   3. Comply with laws
4. Accessibility standards
   1. WCAG
   2. Organization
   3. Ratings
   4. Example 1
   5. Example 2
   6. Principles
5. Accessibility principles
   1. Perceivable
      1. Users must be able to detect the interface and content
      2. Guideline:
         1. Text alternatives
         2. Time-based media
         3. Adaptable
         4. Distinguishable
   2. Operable
      1. Users must be able to interact with the interface effectively
      2. Guidelines:
         1. Keyboard accessible
         2. Enough time
         3. Seizures and physical reactions
         4. Navigable
         5. Input modalities
   3. Understandable
      1. Users must be able to comprehend the interface and how to use it correctly
      2. Guidelines:
         1. Readable
         2. Predictable
         3. Input Assistance
   4. Robust
      1. Users must be able to access your content on a variety of devices, clients, and/or browsers
      2. Guidelines:
         1. Compatible
   5. Review
      1. Out of order, but
      2. Users need to be able to access it, perceive it, understand it, and use it
6. Common tasks
   1. Color
      - Sufficient contrast
      - Complement content
   2. Best HTML
      - Links for navigating
      - Buttons for interactions
      - Descriptive tags
   3. Labeling
      - Alternate text
      - Form labels
      - Descriptive buttons/links
      - Wise use of ARIA
   4. Page structure
      - Use landmarks
      - Heading order
      - DOM hierarchy
   5. Focus management
      - Transferring focus
      - Storing DOM references
      - Trapping focus
   6. Advocating for the user
      - Talk about accessibility
      - Be the voice of whoever is not in the room
   7. Summary
      - These common tasks span from easy to complex, but they are all things that every developer can do
7. Best practices
   1. Prioritize accessibility
      - Measure twice
      - Design system
      - Component library
   2. Add accessibility targets and acceptance criteria
      - Chart your progress
      - Prevent
   3. Follow W3C's lead
      - Get comfortable with resources
      - Reference examples
   4. Audit
      - Automated
      - Manual
      - Accessibility-focused testing
        - Unit testing
        - E2E testing
   5. No new errors
   6. Fixes every sprint
   7. Add to acceptance criteria
   8. Build automated checks into CI/CD
   9. Advocate
   10. Summary
   - There isn't one thing that you can do that will make all of your problems go away. This is a multi-pronged approach that will slowly make your product more accessible over time.
8. Closing
   1. Review learning objectives
   2. Challenge: Go out and commit to making your product more accessible
      - Choose two of the best practices above
   3. Reminder: You don't have be an expert; everyone can make accessible products.
   4. Resources

## Key terms

- Accessibility
- Accessible
- Web Content Accessibility Guidelines (WCAG)

## References

- Americans With Disabilities Act of 1990. https://www.ada.gov/pubs/adastatute08.htm
- CDC. (2019). _Disability Impacts All Of Us_ [infographic]. U.S. Department of Health & Human Services. https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html
- Deque. _Axe: Accessibility testing tools and software_. https://www.deque.com/axe/
- Dodson, Rob. _How to do an accessibility review_. Web Fundamentals. https://developers.google.com/web/fundamentals/accessibility/how-to-review
- Glover Blackwell, Angela. (2017). _The Curb-Cut Effect_. Stanford Social Innovation Review. https://ssir.org/articles/entry/the_curb_cut_effect
- GoogleChrome. _lighthouse_. GitHub. https://github.com/GoogleChrome/lighthouse
- Higgins, Tucker. (2019). _Supreme Court hands victory to blind man who sued Domino’s over site accessibility_. CNBC. https://www.cnbc.com/2019/10/07/dominos-supreme-court.html
- Matuzovic, Manuel. (2019). _Building the most inaccessible site possible with a perfect Lighthouse score_. https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/
- Melendez, Steven. (2019). _Ninth Circuit court: Domino’s pizza website is bound by ADA_. Fast Company. https://www.fastcompany.com/90293399/ninth-circuit-court-dominos-pizza-website-is-bound-by-ada
- Romo, Amberley. (2020). _A11y Friday_. https://a11y.coffee/a11y-friday/
- Romo, Amberley. (2020). _Start Testing for Web Accessibility_. https://a11y.coffee/start-testing/
- W3C. _Collapsible Dropdown Listbox Example_. WAI-ARIA Authoring Practices 1.1. https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-collapsible.html
- W3C. (2018). _Web Content Accessibility Guidelines (WCAG) 2.1_. https://www.w3.org/TR/WCAG21/
- WebAIM. (2019). _Alternate text_. https://webaim.org/techniques/alttext/
- WebAIM. (2020). _The WebAIM Million_. https://webaim.org/projects/million/

<!-- ## To Reference -->
