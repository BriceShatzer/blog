---
layout: post
title:  "Notes from CascadiaJS 2020"
date:   2020-09-02 12:00:00 -0500
tags: CascadiaJS javascript conference
description: "Some of my favorite talks, highlights, and things I found interesting from CascadiaJS 2020, along with a collection of links to all of the talks that took place."  
---
<style>
    #video-time-stamps-for-every-talk+p,#video-time-stamps-for-every-talk+p+p {
        line-height: 1.75;
        padding-left:1em;
    }
    #video-time-stamps-for-every-talk+p strong,#video-time-stamps-for-every-talk+p+p strong {
        margin-left: -1em;
    } 
</style>

Some of my favorite talks, highlights, and things I found interesting from [CascadiaJS 2020](https://2020.cascadiajs.com/). Additionally, links to all of the talks can be found at the bottom of this post. 


**Day 1 Highlights**

- [Modal Windows for Everyone](https://youtu.be/Zsw637CCejI?t=5252) shared some great ideas around implementing modals that I hadn't really thought about previously like "trapping focus" within the modal, hooking CSS to aria-attributes to force their usage by future maintainers, and wiring scrims in an accessible way. This was probably my favorite talk of the conference.  


- [I18N | L10N - The Principals for a more Accessible Web](https://youtu.be/Zsw637CCejI?t=9619) talked about internalization & localization, but my big take-away from this talk was the last 5 minutes where he went through the `Intl` object which gives you a bunch of [internationalization utility methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) like:   
`.DateTimeFormat` with (dateStyle,timeStyle,formatRange),   
`.RelativeTimeFormat`,  
`.ListFormat`,  
& `.DisplayNames`  
and `Temporal` which is in the [process of joining the language](https://tc39.es/proposal-temporal/docs/) and lets you do stuff that you historically needed to use libraries like Moment.js/Day.js.


- [Understanding Accessibility as a Concept](https://youtu.be/Zsw637CCejI?t=11263) talked about accessibility broadly and shared some tools around testing accessibility that I hadn't heard of before like [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) & the [Web Accessibility VS Code Extension](https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility). 
 
- [Memory Leaks and the Havoc They Wreak](https://youtu.be/Zsw637CCejI?t=17992) gave a general overview of memory leaks in JS and how to start going about debugging them. 

**Day 2 Highlights**

- [The Zen of Git](https://youtu.be/YMJ3pAX_0_U?t=5409) walks through what is happening under the hood when you use git and what the various commands are doing behind the scenes. 

- [Musical Creativity in the Browser](https://youtu.be/YMJ3pAX_0_U?t=6943) was a really neat talk about connecting instruments to the internet using the [Web Midi API](https://www.w3.org/TR/webmidi/)

- [Complex Geometry in HTML!](https://youtu.be/YMJ3pAX_0_U?t=9549) - The talk itself was fairly in the weeds, but the demos were really really cool.  
    ・3D game written entirely in vanilla JS, HTML & CSS ( [play it](https://pantel.is/projects/css3d/) | [github](https://github.com/pkalogiros/css3d-game) )  
    ・a really cool [Mario Cart demo](https://codepen.io/pantelisk/pen/QWyzjBm) 

---

## Video time stamps for every talk

**Day 1** - [Video](https://youtu.be/Zsw637CCejI)  
[Opening Message About Racial Justice](https://youtu.be/Zsw637CCejI?t=3031) - Claudius Mbemba  
[Mo'Problems, Mo'Nads](https://youtu.be/Zsw637CCejI?t=3287) - Kyle "Getify" Simpson   
[Modal Windows for Everyone](https://youtu.be/Zsw637CCejI?t=5252) - James Steinbach  
[The Past, Present, and Future of Favicons](https://youtu.be/Zsw637CCejI?t=8273) - Tiger Oakes  
[I18N | L10N - The Principals for a more Accessible Web](https://youtu.be/Zsw637CCejI?t=9619) - Romulo Cintra  
[Understanding Accessibility as a Concept](https://youtu.be/Zsw637CCejI?t=11263) - Jemima Abu  
[Memory Leaks and the Havoc They Wreak](https://youtu.be/Zsw637CCejI?t=17992) - Will Klein  
[Saving Data to the DWeb: A Primer and a Practical Perspective](https://youtu.be/Zsw637CCejI?t=19123) - Kelsey Breseman  
[Human Centered On-Call Practices](https://youtu.be/Zsw637CCejI?t=20659) - Najla Elmachtoub  
[Developing Your Community Brand](https://youtu.be/Zsw637CCejI?t=24205) - Joel Hooks  
[The ACID/BASE Conundrum](https://youtu.be/Zsw637CCejI?t=25764) - Sangeetha KP  
[The Operating System of You](https://youtu.be/Zsw637CCejI?t=26519) - Shawn Wang  

**Day 2** - [Video](https://youtu.be/YMJ3pAX_0_U)   
[How I learned to Stop Worrying and Let the Robot Publish to NPM](https://youtu.be/YMJ3pAX_0_U?t=3750) - Evan Tahler  
[The Zen of Git](https://youtu.be/YMJ3pAX_0_U?t=5409) - Tianyu Pu  
[Musical Creativity in the Browser](https://youtu.be/YMJ3pAX_0_U?t=6943) - Scott Ammon  
[Complex Geometry in HTML! A story of Constrained Creativity](https://youtu.be/YMJ3pAX_0_U?t=9549) - Pantelis Kalogiros  
[SVG, Canvas, and WebGL: The Power, The Beauty, & The Cost](https://youtu.be/YMJ3pAX_0_U?t=11224) - Amber Hoak  
[Building Better Communities with Mental Health Support](https://youtu.be/YMJ3pAX_0_U?t=12757) - Rahat Chowdhury  
[You Might Not Need a Build Step](https://youtu.be/YMJ3pAX_0_U?t=19936) - Kristofer Joseph  
[My Assistant Misty](https://youtu.be/YMJ3pAX_0_U?t=21392) - April Speight  
[Relax, it's IoTea Time!](https://youtu.be/YMJ3pAX_0_U?t=23079) - Myriam E Walden-Duarte  
[How I Graduated from React to Vanilla JavaScript](https://youtu.be/YMJ3pAX_0_U?t=26051) - Dan McKeon  
[Oh Sweet, Gif](https://youtu.be/YMJ3pAX_0_U?t=27338) - Rachelle Rathbone  
[Snowpack, Webpack and the Third Age of JavaScript](https://youtu.be/YMJ3pAX_0_U?t=28278) - Fred K Schott  


<!-- 

CascadiaJS 

[Day 1 Stream Video](https://youtu.be/Zsw637CCejI) | [Day 2 Stream Video](https://youtu.be/YMJ3pAX_0_U) 

https://youtu.be/Zsw637CCejI?t=24203

-->


