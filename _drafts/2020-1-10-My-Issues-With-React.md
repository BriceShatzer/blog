---
layout: post
title:  "My Issues With React"
date:   2019-11-07 12:30:00 -0500
tags:  react javascript 
categories: development
description: " A catalog of this issues I have with react  "
---



### Modularization 

- more offen than not, ends up being modularization for the sake of modularization.

While certainly a lot of these issues are generally the result of breakdowns in architecture or dev planning, the problem is that the entire premise that everything _should_ be built in a modular way. 


__per Reactjs.org__
>Build encapsulated components that manage their own state, then compose them to make complex UIs.

### it's core competency is something that it's not inherently able to do by itself

_per Reactjs.org_
>React makes it painless to create interactive UIs. Design simple views for each state in your >application, and **React will efficiently update and render just the right components when your data changes**.

This is 100% true and actually why everyone started using it.  When data updates, things change auto-magically, and it provides an expansive amount of methods to work with those change-events. 

The issue is that react doesn't have inherent way to of allowing you to manage or update data or state of your application. 


__"but that's why you pair it with redux or whatever"__  
cool...I agree with you, but out of the box, it is nothing more than an absurdly over complicated templating engine. 

It's like saying, "here have this really dope gaming PC...it doesn't have an operating system or any software that'll let you actually use it, but like...it's got a great graphics card!"


### It's Built on a Foundation of Lies  

`class`

class in JS is dumb and bad 
 - https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa
 - https://medium.com/javascript-scene/how-to-fix-the-es6-class-keyword-2d42bb3f4caf
 - https://medium.com/javascript-in-plain-english/please-stop-using-classes-in-javascript-and-become-a-better-developer-a185c9fbede1


and react was built entirely on that paradigm 
https://twitter.com/getify/status/1093871318678659072