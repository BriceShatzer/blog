---
layout: post
title:  "iOS Browser styling"
date:   2016-01-25 12:30:00 -0500
tags:  mobile iOS safari theme-color
categories: development
description: " Description here "
---


text from [pr](https://github.com/gawkermedia/kinja-mantle/pull/16997):  

Expands on [#16940](https://github.com/gawkermedia/kinja-mantle/pull/16940) by removing the `apple-mobile-web-app-capable` & `apple-mobile-web-app-status-bar-style` tags and replacing them with a style tag that 
tricks iOS's [preferredBarTintColor](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/2274394-preferredbartintcolor) SafariServices behavior into tinting the browser status bar to the specified `mainColor`.


![iOS examples](https://i.imgur.com/RVpTXEJ.png)  

![Color Differences](https://i.imgur.com/VNnNPmL.png)

### Limitations
![iOS limitations](https://i.imgur.com/jnGjxtt.png)  

- Dies on scroll  
- doesn't work on chrome because [they're setting their own](https://chromium.googlesource.com/chromium/src.git/+/master/ios/chrome/browser/ui/material_components/utils.mm#46) `tintColor`

### Relevant iOS Development Documentation

- [tintColor](https://developer.apple.com/documentation/uikit/uiview/1622467-tintcolor)
- [preferredBarTintColor](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/2274394-preferredbartintcolor)
- [preferredControlTintColor](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/2274393-preferredcontroltintcolor)
- [safariServices](https://developer.apple.com/documentation/safariservices)