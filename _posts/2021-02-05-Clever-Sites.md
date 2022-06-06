---
layout: post
title:  "Clever Sites For Developers"
date:   2021-02-05 12:00:00 -0500
categories: development
tags: front-end javascript css design
description: "A collection of sites I've found useful over the course of my career."
---
<style>
	h2:not(.post-title) {text-align: center;}
	h2:not(.post-title):before,
	h2:not(.post-title):after {
		margin: 0 1rem;
		border:0.75px solid #69B5C3;
		display:inline-block;
		content:' ';
    	vertical-align: middle;
    	width: 20%;
	}
	img[alt="Boxy SVG editor"]{max-width: 720px;}
</style>

A small collection of sites/services/resources that I've found useful throughout my career in web dev.
There are tools for [visual/design](#visual--design-things), [coding](#programmer--coding-things), [audio/video](#audiovideo-things) and [DevOps & routing](#routing--devops-sort-of-things).



## Visual & Design Things

### [Pixlr](https://pixlr.com/e/): Photoshop for free on the internet
Pixlr is free, runs in the browser, and accomplishes 80% to 90% of the stuff that most people would ever want to do in Photoshop. It's got layers, masking, transforms, clone stamping...literally all the things. An alternative is [Photopea](https://www.photopea.com/), which provides a lot of the same tools, but also allows you to open native file types like `.psd` & `.ai`.  

![Pixlr editor]({{ "/assets/post-files/2021-02-05-Clever-Sites/pixlr.jpg" | relative_url }})

### [Boxy SVG](https://boxy-svg.com/): Free online SVG editor
Boxy SVG is a free, easy to use, and pretty robust SVG editor. You do have to create an account to export or save anything, but it does allow you to generate alternative file types (png,jpg,etc). It also includes a really neat generator feature that allows you to create valid barcodes & QR codes, jigsaw puzzle templates, parliament charts, or printing marks. 

![Boxy SVG editor]({{ "/assets/post-files/2021-02-05-Clever-Sites/boxysvg.svg" | relative_url }})

### ...and if you plan on putting SVGs on the internet you need to use [OMG-SVG](https://jakearchibald.github.io/svgomg/)
If you look at the code behind SVGs that are created using design tools like Photoshop or Illustrator (or even [Boxy SVG](#boxy-svg-free-online-svg-editor)), it's kind of a mess. Meaningless metadate, repeating styles, unneccesarily specific coordinate values, and more all conspire to bloat a file to multiple times larger than it needs to be. 

That's where OMG-SVG comes in. Created by the always entertaining [Jake Archibald](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9), it takes the SVG optimizer tool [SVGO](https://github.com/jakearchibald/svgomg), that would normally run as part of [build/deploy process or toolchain](https://github.com/svg/svgo#other-ways-to-use-svgo) and turns it into a web app with a simple user interface. It works really well and is completely [open-source](https://github.com/jakearchibald/svgomg).


It's worth noting that if you're trying to [include an SVGs directly in JSX](https://www.sanity.io/guides/import-svg-files-in-react#c125367dce7c), TypeScript doesn't like you using the the style attribute <a href="https://i.imgur.com/frvYR1v.png" target="_blank">apparently</a>? OMG-SVG allows you to convert those styles to their appropriate attribute values, making them JSX safe.    





### Easily Make Diagrams w/ [Excalidraw](https://excalidraw.com/)
Excalidraw lets you easily make "white-board" style diagrams that look great. It's completely free, [open-source](https://github.com/excalidraw/excalidraw), and even has a community of folks making libraries of shapes & objects that you can use as well.

![Excalidraw in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/excalidraw.jpeg" | relative_url }})


### Pretty Code Snippet Images w/ [Carbon](https://carbon.now.sh/)
Carbon lets you create great looking code snippet images for use in things like a presentation slide or blog post.
It gives you a ton of syntax highlighting/color scheme options and is a way easier alternative than trying to mess with your editor and the snipping tool.
![Carbon code snippet]({{ "/assets/post-files/2021-02-05-Clever-Sites/carbon.png" | relative_url }})


### [Aspect Ratio Calculator](http://andrew.hedges.name/experiments/aspect_ratio/)
Allows you to calculate the missing value of an image based on its original aspect ratio when resizing it. It's incredibly rudimentary but has been something I've used consistently for nearly a decade.
![The Aspect Ratio Calculator]({{ "/assets/post-files/2021-02-05-Clever-Sites/ARC.png" | relative_url }})

## Programmer & Coding Things

### [MacOS Setup Guide](https://sourabhbajaj.com/mac-setup/)
This has been my go-to guide for setting up a Mac machine for development work for the past 5 years. It covers everything from basic stuff like installing [Homebrew](https://brew.sh/) & [iTerm](https://iterm2.com/) to more involved topics like Ruby & Node version management with `rvm/nvm`. More than anything else it's a good general checklist to prevent you from running into a road blocks down the road because you forgot to install something basic you needed.
![MacOS Setup Guide]({{ "/assets/post-files/2021-02-05-Clever-Sites/macos-setup.png" | relative_url }})

### [The Book of Secret Knowledge](https://github.com/trimstray/the-book-of-secret-knowledge)
This repository is a collection of various materials and tools for developers. It contains inspiring lists, manuals, cheatsheets, blogs, hacks, one-liners, cli/web tools, and more. It's an open-source project so new items are being added to it regularly.

<a href="https://github.com/trimstray/the-book-of-secret-knowledge">![The Book of Secret Knowledge]({{ "/assets/post-files/2021-02-05-Clever-Sites/the-book-of-secret-knowledge.png" | relative_url }})</a>

### [Regexr](https://regexr.com/)
When I was first starting out, I asked one of the other developers I was working with what programing language I should learn. His response, "It doesn't matter, just get really good at regular expression. They all do that." Regexr lets you visualize what your expression is matching and capturing while you're constructing it, in addition to providing a cheatsheet and common patterns.
![Regexr.com]({{ "/assets/post-files/2021-02-05-Clever-Sites/regexr.png" | relative_url }})


### Online JavaScript Beautifier - [beautifier.io](https://beautifier.io/)
Basically the "pretty print" [button from Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/pretty-print) attached to a text box. While this functionality is built into most IDEs, I still find myself regularly throwing in a string of minified JSON or HTML into the site.

![beautifier.io in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/beautifierIO.gif" | relative_url }})

### [JSHint](https://jshint.com/)
The linting/hinting that most of use know and love from our favorite IDEs, but in the browser. This is great for when you're working on a project that has bad/wrong/broken [eslint config file](https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files). It allows you easily toggle through different rule sets & environment assumptions.

![JSHint in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/jshint.gif" | relative_url }})

<!-- 

May need to add "Dan's Tools" 

### [CSS Font Stack](https://www.cssfontstack.com/)
This site has been around for...
![CSS Fonts - Arial]({{ "/assets/post-files/2021-02-05-Clever-Sites/FontStack.png" | relative_url }})
-->

### [BrowserHacks](http://browserhacks.com/)
Y'all remember conditional comments?
```
<!--[if IE 6]> Internet Explorer 6 <![endif]-->
<!--[if IE 7]> Internet Explorer 7 <![endif]-->
<!--[if IE 8]> Internet Explorer 8 <![endif]-->
<!--[if IE 9]> Internet Explorer 9 <![endif]-->
```

In *"the before times"*  there were often instances where we would need target changes or functionality for different or older versions of browsers. This site has an exhaustive list of all those sorts of tricks. Thankfully, I haven't needed to use this site much in recent years, although I do still run into the occasional issue around detecting and implementing something specifically for safari because [Apple hates the internet](https://threadreaderapp.com/thread/1191026394421026816.html).

### [Microsoft Virtual Machines](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
If you ever need to test something on a windows machine, Microsoft has made a complete array of virtual machines available for free.
They run on pretty much every platform (VirtualBox, Vagrant, VMware, etc. ) and they go all the way back to IE8 running on Windows 7.

## Audio/Video Things

### [Webcam Test](https://webcamtests.com/)
I use this daily while working from home before every meeting to make sure that things I'd rather not share aren't inadvertently in frame of the camera.
![Webcam Test ]({{ "/assets/post-files/2021-02-05-Clever-Sites/webcamtest.png" | relative_url }})

### Online Audio Editors
[AudioTrimmer](https://audiotrimmer.com/#) lets you easily trim & cut files, while [TimeStrech Player](https://29a.ch/timestretch/) lets you do interesting stuff like adjust speed/pitch/speed and create loops.

![TimeStrech Player]({{ "/assets/post-files/2021-02-05-Clever-Sites/timestretch.png" | relative_url }})

## Routing & DevOps sort of things

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

### [Bundlephobia](https://bundlephobia.com/)
Allows you to see the impact of including a dependency in your javascript either by looking up individual packages or by uploading and scanning your `package.json` file.

![Bundlephobia in action]({{ "/assets/post-files/2021-02-05-Clever-Sites/bundlephobia.gif" | relative_url }})



