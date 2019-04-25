---
layout: post
title:  "Check the size of online files with this simple command-line function"
date:   2019-04-25 12:00:00 -0500
tags: bash curl command-line
description: "A simple function to put in your .bashrc file to quickly get the size of files via curl"
---



I recently had a project dealing with image compression/hosting and I wanted a way to check the size of a hosted file that was quicker than digging into the [network panel](https://developers.google.com/web/tools/chrome-devtools/network/) or opening [Postman](https://www.getpostman.com/) each time. 

So, I wrote a simple function that I've added to my [.bashrc file](https://github.com/BriceShatzer/my-stuff/blob/master/onion-gmg/.zshrc) to do exactly that.


Basically it is just a simple wrapper around [curl](https://curl.haxx.se/) that:
  1. Uses `curl -I` to fetch the header of a user provided URL
  2. Checks to make sure the header returned useful information
  3. Takes that useful header information and formats it in a way that is easy to understand.

### Code
```sh

function curl-size {
  if [[ -z $1 ]]; then
    printf '%s\n' "Please provide a URL"
  else
    response=$(curl -sI "$1" | tr -d '\r' )
    statuscode=$(echo $response | awk '/^HTTP/ {print}')
    bytelength=$(echo $response | awk '/[cC]ontent-[lL]ength/ {print $2}')

    if [[ $statuscode != *"200"* ]]; then
      print $statuscode
    fi

    function _doMath {
      divisor=$1
      print "scale=3;$bytelength/$divisor" | bc -l
    }

    if [[ -z $bytelength || ($bytelength == "0") ]]; then
      value=""
      unit="Please provide a valid URL"
    elif (($bytelength>1000000000));then #1*10^9
      value=$(_doMath 1000000000)
      unit="gb"
    elif (($bytelength>1000000));then #1*10^6
      value=$(_doMath 1000000)
      unit="mb"
    elif (($bytelength>1000));then
      value=$(_doMath 1000)
      unit="kb"
    else
      value="$bytelength"
      unit="bytes"
    fi
    printf '%s\n' "$(printf '%s\n' "$value" | grep -o '.*[1-9]') $unit"
  fi
}

```

### In Use

Using it for it's original purpose...
![curl-sizing an image]({{ "/assets/post-files/2019-04-23-curling-for-size/curl-size-image.png" | relative_url }})


It even handles URLs that return non-200 status codes...  
![curl-size returning a 301]({{ "/assets/post-files/2019-04-23-curling-for-size/curl-size-non200.png" | relative_url }})



<!-- 
![curl-size in action]({{ "/assets/post-files/2019-04-23-curling-for-size/curl-size.png" | relative_url }})

### Broadening Your Horizons


hosted 

 where I needed to check that size of some hosted files pages 



super simple 

writing a function that: 
  1. Uses `curl -I` to fetch the header of a user provided URL
  2. Check to make sure the header returned useful information
  3. Take that useful header information and format it in a way that is understandable
-->