---
layout: post
title:  "Dictating Markup Structure via Styling/SASS"
date:   2017-06-13 12:00:00 -0500
categories: development
tags: sass best-practices documentation
description: "A response to a Stack Overflow question about sass mixins that require a particular markup structure and the idea of extending them via arguments to make it a more flexible."
---


This is a response I gave to a [Stack Overflow question](https://stackoverflow.com/questions/44533365/thoughts-on-a-mixin-requiring-a-specific-html-structure/44534118) 
that was soliciting opinions about using a sass mixin that requires a particular markup structure and the idea of extending it via arguments to make it a more flexible.  


I figured my the topic is interesting enough to share my (perhaps overly verbose) 
answer to the world outside of a Stack Overflow question with 0 up-votes.  
  
Check out some of the other questions I've asked & answered over at [Stack Overflow](https://stackoverflow.com/users/1608016/brice). 

---
  
*TL;DR: **With gratuitous code-commenting**, I think dictating the structure in the styling is fine. Also, having your mixin accept arguments makes it more flexible to use, but exponentially more complex to build/maintain. Really think hard if you're ok with that tradeoff.*  

The nice thing about working in any sort of environment/language that will ultimately be compiled or minified before it gets to production, is that it allows you to be incredibly verbose with your code comments. At best, they can be an incredibly helpful insights into how stuff works. At worst, they are easily ignorable and get stripped when compiling for production anyways, so there really isn't a cost. SASS is no exception.

With that preface in mind...  
I have done something similar in the past where we were using [placeholder selectors][1] as a base style for a particular family of elements that would each get extended with their own unique styles given the situation. The structure of the markup that those elements needed to use, along with how to write and an extended style was all included within that particular SASS include. It ended up looking something like:  

```scss
    %full-width-story-block {
    /* Can be included with article.story-block elements which need to occupy their container's full width.
       See "Usage" section after the style definitions for notes & examples. */

      flex-basis: 100%;
      display: flex;

      & > * {
        @include make-col(6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
      }
      & > div {
        padding-left: $story-block-spacing*2;
      }
      & > a { display: block; }
      @include media-breakpoint-up(md) {
        h3 { padding-top: 0; }
      }

      @include media-breakpoint-down(sm) {
        flex-wrap: wrap;

        & > div {padding-left:0;}
        & > * {
          @include make-col(12);
        }
      }

    /*  Usage :
        + Ensure that the element is rendered on the page in the following pattern:
          (note the div containing everything but the 1st anchor/image tags.
           This is generally not included when story-block elements are used in "Content Walls")

            <article id="post-4321" class="story-block">
                <a href="/link/to/post"> <img src="story-pic.jpg" /> </a>
                <div>
                  <h3> <a href="/link/to/post">Story Title</a> </h3>
                  <p>A short excerpt from the article...</p>
                  <div class="save-article">
                    <a class="save-to-pocket" href="/pocket/url"/> <svg>...</svg></a>
                    <a class="save-to-instapaper" href="/instapaper/url"/> <svg>...</svg></a>
                  </div>
                </div>
            </article>

        + Extend the styling to the element container:
              .container-needing-full-width-story-block {
                  .story-block { @extend %full-width-story-block; }
              }
    */
    }
```

The big thing was communicating that the info was there and being consistent in the implementation. There were a couple of different families of components that shared that sort of structure, and they each had their required markup structures and process of extension laid out in the code comments in a similar manner. This made it easy for other dev to come along and start using & extending the structures we had already spent time setting up.

Also, the fact that all of this documentation (for a lack of a better word) existed within the codebase itself means that all this knowledge would be ported around with the project files by default. So in 2 years when a fix or update needs to be applied, as long as we have the code-base, we're not trying to track down some obscure internal knowledge-base/wiki article or the devs who originally built it.  


All of that being said, I would caution you on writing something that would accept arguments. In theory it does allow for more flexibility in the structure of markup, but that flexibility comes at the cost of increased complexity in building and maintaining that mixin. I've seen/built things like that which had good intentions, but ultimately ended becoming very "switch case"-ey, with each usage of the mixin elsewhere in the project requiring changes to the mixin itself to handle that particular situation's idiosyncrasies. Just something to think about...



  [1]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_