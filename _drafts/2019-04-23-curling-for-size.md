---
layout: post
title:  "Check the size of files online with this simple, command-line function"
date:   2019-04-23 12:00:00 -0500
tags: bash curl command-line
description: "A simple function to put in your .bashrc file to quickly get the size of files via curl"
---

```sh

function curl-size {
  if [[ -z $1 ]]; then
    printf '%s\n' "Please provide a URL"
  else
    bytelength=$(curl -sI "$1" | tr -d '\r' | awk '/[cC]ontent-[lL]ength/ {print $2}')

    function _doMath {
      divisor=$1
      echo "scale=3;$bytelength/$divisor" | bc -l
    }

    if [[ -z $bytelength ]]; then
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


### Usage 

![curl-size in action]({{ "/assets/post-files/2019-04-23-curling-for-size/curl-size.png" | relative_url }})
