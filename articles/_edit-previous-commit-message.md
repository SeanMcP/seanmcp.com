---
title: Edit a previous commit message
description: 
date: 2019-07-10
tags:
    - git
    - programming
layout: article
---

At work, all of our commit messages need to begin with a ticket name and number from Jira. If I'm working on the Bananas project and am assigned ticket 5, my commit messages will look like:

```sh
BANANAS-5 Add user authentication
```

If you forget to add the ticket to the commit message, you are unable to push your code to the project repository on BitBucket.

Since I commit a lot outside of work and am the type of developer who makes mistakes, I find myself with commit messages that are missing the required ticket.

You might not have the same policy on your project, but you may have found yourself wanting to change a commit message. Here are two options for editing a previous commit message.

## Change the most recent commit

Sometimes you can catch the error quickly after making your commit. If you need to change the most recent commit message, you can use the `amend` flag.

In your project directory in the terminal, enter:

```sh
git commit --amend
```

This will bring the most recent commit message open in your default editor. Make the necessary changes to the message, mind the formatting, save the file, and exit. You should see a read out with the updated commit message.

## Change an old commit

More often than not, I don't find my commit message error until many commits later. In those cases, the `amend` flag won't help use. We need to `rebase`.

Rebasing in git is a way to change commits from long ago by reapplying all the commits from a point in time. When you `rebase` you can rewrite the history of your project; so proceed with caution.

First, you need to find the commit message from which you want to start your rebase. To do that, go to the log:

```sh
git log
```

Now find find the commit **immediately prior to the one you want to change** and copy the hash (long series of letters and numbers). With that point of reference, you're ready to rebase!

Enter the `rebase` command with the `interactive` flag (you can also use `-i` for short) and the commit hash you copied:

```sh
git rebase --interactive <prior_commit_hash>
```

This will open the default editor with a list of all the commits **after** the hash you provided. There is a good bit going on here, but don't be overwhelmed. Focus on the top of where you can see a list of the commits and their messages.

It should look something like this:

```sh
pick a8fc26a BANANAS-5 This is a good commit message
pick 60ac057 Change me!

# Rebase 5923966..60ac057 onto 5923966 (2 commands)
```

Now, find the commit message you want to change, and replace the word `pick` with `reword`:

```
pick a8fc26a BANANAS-5 This is a good commit message
reword 60ac057 Change me!
```

Then save and exit the editor. 
