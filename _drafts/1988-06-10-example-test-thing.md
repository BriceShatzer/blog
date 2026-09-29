---
title: "example test thing"
date: 1988-06-10 12:00:00 -0500
permalink: "/example-test-post"
description: "A short, one-sentence summary of the post for the index, feed, and social cards."
categories: development
tags: tooling javascript web-development
---



<!--
Optional include in the front matter after you revise a published post:
 last_modified_at: 2026-10-03 09:30:00 -0500
  -->



### Title

Yoo! This is a test post 

>In creating posts for this blog, does the file name still need to follow any specific conventions still?

Yes. Published posts must use Jekyll’s date-prefixed form:
_posts/YYYY-MM-DD-Descriptive-Title.md
For example: _posts/2026-10-01-Some-Title.md.
The filename’s title portion doesn’t determine the public URL; set that explicitly with permalink: "/some-title" in the front matter. Draft filenames in _drafts/ don’t need the date prefix.
