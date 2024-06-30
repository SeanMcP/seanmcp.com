---
title: 'Bypass "Error: There are no prompts" in promptfoo'
description:
  Adding a space to the end of the prompt text appears to be a workaround for
  this error
tags:
  - AI
  - promptfoo
pubDate: 2024-06-29T21:21-0400
verse:
---

While evaluating different language models with
[promptfoo](https://promptfoo.com/), I started running into the following error
message:

```
/Users/seanmcp/project-dir/node_modules/.pnpm/promptfoo@0.67.0_@aws-sdk+client-bedrock-runtime@3.606.0_@azure+identity@4.3.0_@azure+openai-_c7fwzdecwpaax3yh5ny536i2qu/node_modules/promptfoo/dist/src/prompts/index.js:136
            throw new Error(`There are no prompts in ${JSON.stringify(prompt.raw)}`);
                  ^

Error: There are no prompts in "TEXT_OF_THE_PROMPT_THAT_I_TRIED_TO_EVALUATE"
    at readPrompts (/Users/seanmcp/project-dir/node_modules/.pnpm/promptfoo@0.67.0_@aws-sdk+client-bedrock-runtime@3.606.0_@azure+identity@4.3.0_@azure+openai-_c7fwzdecwpaax3yh5ny536i2qu/node_modules/promptfoo/dist/src/prompts/index.js:136:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async resolveConfigs (/Users/seanmcp/project-dir/node_modules/.pnpm/promptfoo@0.67.0_@aws-sdk+client-bedrock-runtime@3.606.0_@azure+identity@4.3.0_@azure+openai-_c7fwzdecwpaax3yh5ny536i2qu/node_modules/promptfoo/dist/src/main.js:129:27)
    at async runEvaluation (/Users/seanmcp/project-dir/node_modules/.pnpm/promptfoo@0.67.0_@aws-sdk+client-bedrock-runtime@3.606.0_@azure+identity@4.3.0_@azure+openai-_c7fwzdecwpaax3yh5ny536i2qu/node_modules/promptfoo/dist/src/main.js:545:48)
    at async Command.<anonymous> (/Users/seanmcp/project-dir/node_modules/.pnpm/promptfoo@0.67.0_@aws-sdk+client-bedrock-runtime@3.606.0_@azure+identity@4.3.0_@azure+openai-_c7fwzdecwpaax3yh5ny536i2qu/node_modules/promptfoo/dist/src/main.js:704:9)
```

It didn't occur for a long time, but then started occurring every time I added a
new prompt to the config. Clearing the cache did not help.

The only solution I found was to add a space to the end of the prompt text:

```yaml
prompts:
  - "TEXT_OF_THE_PROMPT_THAT_I_TRIED_TO_EVALUATE "
```

This enabled promptfoo to run as expected. Definitely not ideal, but hopefully
this unblocks you if you run into the same issue.

I will update this article if I find a better solution. If you have one, please
send me an email.
