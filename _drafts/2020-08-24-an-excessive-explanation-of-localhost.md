---
layout: post
title:  "TMI: Localhost & the host file"
date:   2020-08-24 12:00:00 -0500
categories: bash curl command-line hostfile
description: "An excessive explanation you didn’t ask for…"
---

so a excessive explanation you didn’t ask for…
When something on your computer tries to make a request for something, it first has to do lookup (assuming the request isn’t being made to an ip address) to figure out what ip address to send that request too.

The first place it checks is that local host file. If the domain name has a record there. If it does, it uses that ip. If not, it makes a DNS request to an external service to look up where to send that request.


IPv4 reserves 127.0.0.1 through 127.0.0.8 for loopbacks. Anything sent to any of those addresses loops back to where it came from.


That file is saying,
- if the url is "localhost" or "localhost.paypal.com" send it to the ip address 127.0.0.1
- if the url is "broadcast" send it to all hosts attached to the network. (255.255.255.255 is a reserved as the broadcast address)
- alternatively, if we're using IPv6, send it to the ip address ::1 (which is IPv6 loopback address)
- if the url is "nova-ash.paypalcorp.com" send it to the ipaddress 173.224.163.100



a couple of years ago when they were opening up new top level domains (.com, .org, .gov), there was an issue where some developers were using .dev to do work internally.




all this dns stu


That file is saying


it checks with application making the request makes a DNS request to look up where to send that request.