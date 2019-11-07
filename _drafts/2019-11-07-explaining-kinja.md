---
layout: post
title:  "Explaining Kinja"
date:   2019-11-07 12:30:00 -0500
tags:  kinja
categories: development
description: " Description here "
---



<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Kinja is at this point the absolute best CMS though... nobody discusses this</p>&mdash; Anna Merlan (@annamerlan) <a href="https://twitter.com/annamerlan/status/1191429517769953282?ref_src=twsrc%5Etfw">November 4, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<!-- 
This will end up being a post that I can link to in other posts to explain the unique setup that kinja uses. Primarily, it will explain [Feature Switches](https://en.wikipedia.org/wiki/Feature_toggle) and probably link to [this article](https://martinfowler.com/articles/feature-toggles.html) on the subject.
-->


Doing it live. An alternative, production-only workflow. 


Pitch - I'm a Software Engineer at The Onion, which is a part of G/O media. 



a fairly unique development workflow, 

Laying out who am I/what I do/





allows our A/B testing framework to be almost entirely cookie based and handled at the routing level?



I'm not saying that this is how you should develop a platform that [supports an audience of over 100 million](https://gofile.io/?c=ymSqYh) per month, but it is how we [Kinja](https://en.wikipedia.org/wiki/Kinja) is built. 






From a tech stack standpoint, 
Kinja consists of a series of back-end services and endpoints that are consumed by user-facing application called **Mantle**.


Mantle uses the [Play! Framework](https://en.wikipedia.org/wiki/Play_Framework) and [Closure templates](https://github.com/google/closure-templates) with [Backbone](https://backbonejs.org/) + [Marionette](https://marionettejs.com/) handling interactivity on the client-side. 



Starting around 2016/2017, efforts began to update (and ultimately migrate) this application to an entirely JavaScript based system called **Magma**. 

This is built using [React](https://reactjs.org/), [Flow](https://flow.org/), and [Styled Components](https://www.styled-components.com/). At this point *(late 2019)*, nearly all of the templating, rendering, & non-editorial interactivity has been migrated to this new system.



Working on Kinja from software engineering perspective, is 

Throughout the various iterations of Kinja, there has always been one peculiarity that manages to shock/confuse/dismay every single new developer who is asked to work it on it: 
_**There is only production.**_  

There are no "staging", "dev", or "QA" environments. You can certainly run the application locally and preview your work, but as soon as it is merged into master and all the CI tasks are green, it's live and powering 12 of the [internet's most widely read sites](https://gofile.io/?c=ymSqYh).

Now I'm sure you have some questions: 
>How do you preview features for stakeholders?   
>What happens if a change breaks something?  
>So you just like, *don't do* user acceptance testing?  
>What is wrong with you people?  

All of these questions are completely valid. As absurd as it might sound to not use the  tried-and-tested method of having some sort of stagging/ environment

for exactly those reasons, 

we do in fact have a method to handle those sort of things.   
 
 sorts of things,


those sorts of scenarios

  things like majo

We do have This leads me to our primary method of handling 

### Feature Switches  

All of those questions are completely valid.  


there has been one consistent idoscc

there has been one fairly  




Primarily, it will explain [Feature Switches](https://en.wikipedia.org/wiki/Feature_toggle) and probably link to [this article](https://martinfowler.com/articles/feature-toggles.html) on the subject.


the rational being, 

this Feature Switches could be 


Mantle/Magma could be run locally, 

Development can do 

- https://martinfowler.com/articles/feature-toggles.html
- https://martinfowler.com/bliki/FeatureToggle.html
- https://martinfowler.com/bliki/FeatureBranch.html

<!--     

[![Do It Live!]({{ "/assets/post-files/2019-11-07-explaining-kinja/doitlive.gif" | relative_url }})]({{ "/assets/post-files/2019-11-07-explaining-kinja/doitlive.gif" | relative_url}})       

One of the quirks of 

Micro Play 

Node 

& React based ecosystem
the 
Services 
With 
Is currently s

The frontend 

Kinja is a CMS and publishing 
-->


The only public repo of White House pool reports. 



