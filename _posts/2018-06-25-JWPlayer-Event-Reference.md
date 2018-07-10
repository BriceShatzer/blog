---
layout: post
title:  "JWPlayer Event Reference"
date:   2018-06-25 13:51:30 -0500
categories: development javascript JWPlayer
description: "A reference to all the events that can potentially fire when using JWPlayer 8."
---

A reference to all the events that can potentially fire when using JWPlayer 8.  
Full documentation can be found [here](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/)


- `all`

- **[Setup](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronready)**
    + `ready`
    + `setupError`
    + `remove`
 
- **[Viewability](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronviewable)**
    + `viewable`

- **[Playlist](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronplaylist)**
    + `playlist`
    + `playlistItem`
    + `playlistComplete`

- **[Buffer](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronbufferchange)**
    + `bufferChange`

- **[Playback](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronautostartnotallowed)**
    + `autostartNotAllowed`
    + `play`
    + `pause`
    + `playAttemptFailed`
    + `buffer`
    + `idle`
    + `complete`
    + `firstFrame`
    + `error`
    + `playbackRateChanged`

- **[Seek](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronseek)**
    + `seek`
    + `seeked`
    + `time`

- **[Volume](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronmute)**
    + `mute`
    + `volume`

- **[Resize](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronfullscreen)**
    + `fullscreen`
    + `resize` 

- **[Quality](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronlevels)**
    + `levels`
    + `levelsChanged`
    + `visualQuality`

- **[Audio Tracks](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronaudiotracks)**
    + `audioTracks` 
    + `audioTracksChanged`

- **[Captions](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeroncaptionslist)**
    + `captionsList`
    + `captionsChanged`

- **[Controls](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeroncontrols)**
    + `controls`
    + `displayClick`

- **[Advertising](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayeronadblock)**
    + `adBlock`
    + `beforePlay`
    + `beforeComplete`
    + `adBidRequest`
    + `adBidResponse`
    + `adClick`
    + `adCompanions`
    + `adComplete`
    + `adSkipped`
    + `adError`
    + `adRequest`
    + `adStarted`
    + `adImpression`
    + `adPlay`
    + `adPause`
    + `adTime`
    + `adBreakStart`
    + `adBreakEnd`
    + `adManager`
    + `adMeta`
    + `adSchedule`

- **[Metadata](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#metadata)**
    + `meta`

- **[Sharing](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#sharingpluginonopen)**
    + `sharingPlugin.on('open')`
    + `sharingPlugin.on('close')`
    + `sharingPlugin.on('click')`

- **[Related](https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#relatedpluginonopen)**
    + `relatedPlugin.on('open')`
    + `relatedPlugin.on('close')`
    + `relatedPlugin.on('play')`




