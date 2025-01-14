## Outline

- It's possible to live here in the United States and never be exposed to a foreign language
- It's also possible to live here and rarely see English
- We live in a multi-cultural country
- As developers, we want to make our products as friendly and welcoming to people as possible
- I work at Niche.com, a company who's mission is to help people "find where [they] belong"
- But eating away at the back of my mind was the fact that our entire site is in English
- So should we update our tagline? "Helping English-speakers find where they belong?"
- Instead, how can we alter our product to help **everyone**, or at least as many people as possible?
- For a three-day hackathon at Niche, I tried to find an answer to that question
- That pursuit opened the door to a whole new world of internationalization
- There are two areas on which I want to focus:
  1. Internationalization
  2. Localization
- The first option that I
- Translation services from companies like Google and Microsoft are valuable, but they cannot grasp the nuances of the language
  - For an example, on Niche.com we have a section on a school profile for "Majors": academic areas of focus
  - When you run that through an automated translator into Spanish, you get _Grandes Ligas_ or "Big Leagues"
  - Google things you're trying to find the nickname for Major League Baseball
- There isn't an abstract syntax tree that you can parse nor a transpiler to use: Translation (for now) requires humans
- So we set off translating!
- The goal was to take the headings of each section on a profile and translate them into other languages
  - Since we didn't have time to translate all of the content on the site, helping people orient themselves on the page with a familiar language seemed like a good place to start
- Using our team (with some help from parents), we were able to translate those headings into **<LOOK_UP_THE_NUMBER> different languages**!
- Best practices
  - Avoid flags to represent languages
    - Your cultural identity is not defined by the origin country of the language you speak
    - I get a weird feeling when visiting a usually European site with a UK flag in the top bar
    - That feeling would be worse for someone in Hong Kong or Taiwan to see a Chinese flag
    - You might be an American citizen who prefers Spanish. You shouldn't have to see the Mexican or Spanish flag everywhere.
    - The best representation of a language is its name

## Key terms

- internationalization
- localization

## References

## To reference

- https://twitter.com/Rich_Harris/status/1281636822968393732
  - Rich is a developer at the New York Times
  - Internationalization is a complex problem to solve!