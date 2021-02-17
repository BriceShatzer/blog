---
layout: post
title:  "Clever Sites For Developers"
date:   2021-02-05 12:00:00 -0500
categories: development
tags: front-end javascript css
description: "A collection of sites I've found useful over the course of my career."
---

A small collection of sites/services/resources that I've found useful throughout my career in web dev.  


### [Regexr](https://regexr.com/)  
When I was first starting out, I asked one of the other developers I was working with what programing language I should learn. His response, "It doesn't matter, just get really good at regular expression. They all do that." Regexr lets you visualize what your expression is matching and capturing while you're constructing it, in addition to providing a cheatsheet and common patterns.  
![Regexr.com]({{ "/assets/post-files/2021-02-05-Clever-Sites/regexr.png" | relative_url }})


### Online JavaScript Beautifier - [beautifier.io](https://beautifier.io/) 
Basically the "pretty print" [button from Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/pretty-print) attached to a text box. While this functionality is built into most IDEs, I still find myself regularly throwing in a string of minified JSON or HTML into the site. 

![beautifier.io in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/beautifierIO.gif" | relative_url }})

### [JSHint](https://jshint.com/) 
The linting/hinting that most of use know and love from our favorite IDEs, but in the browser. This is great for when you're working on a project that has bad/wrong/broken [eslint config file](https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files). It allows you easily toggle through different rule sets & environment assumptions.

![JSHint in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/jshint.gif" | relative_url }})


### Pretty Code Snippet Images w/ [Carbon](https://carbon.now.sh/)  
Carbon lets you create great looking code snippet images for use in things like a presentation slide or blog post. 
It gives you a ton of syntax highlighting/color scheme options and is a way easier alternative than trying to mess with your editor and the snipping tool. 
![Carbon code snippet]({{ "/assets/post-files/2021-02-05-Clever-Sites/carbon.png" | relative_url }})


### [Aspect Ratio Calculator](http://andrew.hedges.name/experiments/aspect_ratio/)
Allows you to calculate the missing value of an image based on its original aspect ratio when resizing it. It's incredibly rudimentary but has been something I've used consistently for nearly a decade. 
![The Aspect Ratio Calculator]({{ "/assets/post-files/2021-02-05-Clever-Sites/ARC.png" | relative_url }})



### [Microsoft Virtual Machines](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)  
If you ever need to test something on a windows machine, Microsoft has made a complete array of virtual machines available for free. 
They run on pretty much every platform (VirtualBox, Vagrant, VMware, etc. ) and they go all the way back to IE8 on Windows 7. 



### [Bundlephobia](https://bundlephobia.com/) 
Allows you to see the impact of including a dependency in your javascript either by looking up individual packages or by uploading and scanning your `package.json` file. 

![Bundlephobia in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/bundlephobia.gif" | relative_url }})


### [http://xip.io/](http://xip.io/)   

xip.io is a magic domain name that provides wildcard DNS for any IP address. Say your LAN IP address is 10.0.0.1, using xip.io:
```
          10.0.0.1.xip.io   resolves to   10.0.0.1
      www.10.0.0.1.xip.io   resolves to   10.0.0.1
```
Why? This sort of [explains some reasons why](https://stackoverflow.com/a/37370422/1608016) you might want to do this.  


### [CORS Anywhere](https://github.com/Rob--W/cors-anywhere)  
It's a live endpoint that allows you to proxy a request to a URL which doesn't have CORS enabled. I've used it when debugging an issues on projects that relied on calls to a URL where CORS was enabled, but not necessarily for that particular environment in which I was currently working.     


Endpoint - [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/)  
[Github Repo](https://github.com/Rob--W/cors-anywhere/)  
[Example Application](https://robwu.nl/cors-anywhere.html)


### [BrowserHacks](http://browserhacks.com/)
Y'all remember conditional comments?  
```
<!--[if IE 6]> Internet Explorer 6 <![endif]-->
<!--[if IE 7]> Internet Explorer 7 <![endif]-->
<!--[if IE 8]> Internet Explorer 8 <![endif]-->
<!--[if IE 9]> Internet Explorer 9 <![endif]-->
```

In *"the before times"*  there were often instances where we would need target changes or functionality for different or older versions of browsers. This site has an exhaustive list of all those sorts of tricks. Thankfully, I haven't needed to use this site much in recent years, although I do still run into the occasional issue around detecting and implementing something specifically for safari because [Apple hates the internet](https://threadreaderapp.com/thread/1191026394421026816.html). 


