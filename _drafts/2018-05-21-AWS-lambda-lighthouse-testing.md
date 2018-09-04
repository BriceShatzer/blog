---
layout: post
title:  "Untitled Post about using Lighthouse, AWS, & Datadog to monitor performance"
date:   2018-09-04 12:30:00 -0500
tags:  AWS javascript datadog performance
categories: development
description: " Description here "
---


`notes prior to publishing, make sure FS stuff is changed in a way to obfuscate it*`

**TL;DR:** _setting up a thing _  

### Goals

- benchmark our stuff so we have 
- Have it run intermittently or after merges to master/deploys to 

### what and how
First Meaningful Paint
Total Page Size
DOM node count

we have ways of running our stuff with no thirdparty scripts & forcing our ad ecosystem to serve static ad content that we control, so additionally it would be nice to benchmark in those environments as well. 


### first idea, do it as a build script 


Why?  
- potentially run as a pre-commit/merge/push hook as a way of implementing a soft or hard performance budget

no bueno, Jenkins shits itself on aysnc stuff? 

### Jenkins Job

This Jenkins task was set up to run at minute 22 past every 3rd hour. It makes a post request to our AWS endpoint for each of the URLs that we are tracking in Datadog.

```yaml
- job:
    name: kinja-mantle-lighthouse-performance-audit
    description: |
      Posts URLS to be tested to an AWS Lambda function which initalizies the Lighthouse tests that ultimately send their results to datadog
    display-name: 'kinja-mantle: Lighthouse Performance Audit'
    workspace: /var/jenkins_home/local-workspace/kinja-mantle-lighthouse-performance-audit
    triggers:
      - timed: '22 */3 * * *'
    scm:
      - git:
          url: git@github.com:gawkermedia/kinja-mantle.git
          branches:
            - origin/master
          local-branch: master
          wipe-workspace: false
    builders:
      - shell: |
          JENKINS_BUILD=true
          set -e
          declare -a arr=("https://gizmodo.com"
                          "https://www.theonion.com"
                          "https://gawkerselenium.kinja.com/permanent-test-post-do-not-delete-1787626061"
                          "https://www.avclub.com/pacific-rim-uprising-proves-that-it-is-possible-to-scr-1823997019"
                          "https://gizmodo.com/well-be-liveblogging-the-apple-wwdc-2018-keynote-right-1826531789"
                          "https://deadspin.com/native-american-lacrosse-teams-reported-racial-abuse-t-1824292659"
                          "https://www.avclub.com/c/review"
                          )
          for url in "${arr[@]}"
          do
            curl --request POST \
              --url https://qyg81cpxsf.execute-api.us-east-2.amazonaws.com/default/publish-to-sns \
              --header 'Cache-Control: no-cache' \
              --header 'Content-Type: application/x-www-form-urlencoded' \
              --data-urlencode url=$url
          done

```


### Title about resulting output

See screenshot of Datadog dashboard 
