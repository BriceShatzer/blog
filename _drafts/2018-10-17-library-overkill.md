---
layout: post
title:  "Untitled post about unicode, npm packages, & ASCII"
date:   2018-10-17 16:10:38 -0500
tags: development javascript web unicode npm ASCII
description: ""
---



We were using it to sanitize an input that apparently needed to be encoded in [utf8mb3])(https://dev.mysql.com/doc/refman/5.5/en/charset-unicode-utf8mb3.html) at one point. 


filter a list of authors regardless of accented characters via standard inputs from a [U.S. QWERTY keyboard](https://en.wikipedia.org/wiki/QWERTY)

example - 
`assets/post-files/2018-10-17-library-overkill/author-search-example.png`



see: 
`assets/post-files/2018-10-17-library-overkill/bundle-analyzer_pre-removal.png`



---  

Step One: where are you using it and is where you're using it a reasonable use case? 
    - utf8mb3, nevermind... 
    - we were sanitizing an attribute called `BlogDisplayName` for use as a [UTM parameter](https://en.wikipedia.org/wiki/UTM_parameters). There are two reasons why this wasn't a reasonable use case. First, UTM parameters are just a specific type of URL query parameter which would mean that instances of non-ASCII characters would simply end up being [percent encoded](https://en.wikipedia.org/wiki/Percent-encoding) when we [write it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) to the page,
    - This surfaced that we were using a sub-optimal value to begin with. `BlogDisplayName` is used primarily as site titles on the masthead of pages. On this [page](https://sports.theonion.com/) for example `BlogDisplayName = "Sports"`. It's not terribly descriptive and didn't really work well for the case we were using it for, so we switched to using `BlogName`, (`BlogName = onionsports` in the example).

"Sports"
kinja.meta.blog.name
"onionsports"` displaying 



---





using it for a 

saved via in the 
character 