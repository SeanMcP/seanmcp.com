---
title: QA questions for everyone to ask
description:
  Everyone on the product team should ask verifying, discovery, and critical
  questions to ensure quality
tags:
  - Software Engineering
  - Quality Assurance
pubDate: 2023-05-10T14:04-0400
verse: 1 Kings 10:1
---

My former colleague Michael Scotto recently
[wrote about quality assurance and asking questions](https://thequalityindex.com/three-types-of-questions-qa-must-ask-5b907a7102fe):

> Many use phrases like “QA Engineer” and “Tester” interchangeably. It’s
> convenient to do so, and generally innocuous — but **this is narrow
> thinking.** To think of Quality Assurance as “testing” is reductive; it puts a
> governor on the value-add of your QA team.

> **Testing is a skill, not a job.** Instead, think of QA as the art of asking
> unasked questions. Testing is only one way to do this. It’s a coincidence that
> “QA” could also represent “Question Asker”, but it’s a meaningful coincidence.

He lists three types of questions to ask:

1. Verification: Does X do Y?
2. Discovery: What happens if…?
3. Criticism: Does this make sense?

I really like this breakdown, and he includes more examples in the article. It
illustrates the reality that assuring quality transcends any functional team:
everyone is responsible, because everyone can and should be asking these types
of questions.

As an engineer, I should to be asking verification questions throughout the
development process. I’ll probably codify those questions by writing unit and
end-to-end tests. Answering these questions should be the baseline before
handing the work off to another team member.

But I should also be asking discovery questions to surface edge cases that need
to be addressed. Some of those are apparent when writing the code, “Oo, we
aren’t handling this state case”, but other times it’s based on user
interaction. I need to play around a bit and look for those pitfalls.

And all the while I should ask critical questions: does this implementation make
sense? Will it meet the needs of our users? What about folks on low-powered
devices or those with disabilities? If the answer to those questions are
unsatisfactory, then I might need to work out a different solution.

Personally, I find asking verification and criticism questions easy; it’s
discovery questions that I often overlook. This article was a good framework for
thinking about quality assurance and reminder that I need to play my part in the
process as well.
