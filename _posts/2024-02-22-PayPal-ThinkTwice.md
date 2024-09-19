---
layout: post
title:  "Think Twice: High-Stakes Change Control at PayPal"
date:   2024-02-22 12:00:00 -0500
categories: development
tags: testing javascript PayPal CI/CD
description: "PayPal experienced 971 seconds (16:11) of ATB (availability to the business) downtime, leading to ~350,000 failed transactions and $400k in lost revenue. In response, they launched a mandatory, recurring training program for software engineers called Think Twice."
---




PayPal experienced 971 seconds (16:11) of ATB (availability to the business) downtime, leading to ~350,000 failed transactions and $400k in lost revenue. The root cause was determined to be a faulty software change with the extended length of the outage being caused by inadequate rollback planning. In response, they launched a mandatory, recurring training program for software engineers called "Think Twice". Below are my notes from that program.


--- 

## Change Control

**Failed changes are the largest contributor to downtown with undocumented changes causing 10x the impact of documented changes.** 

**safe** - doesn't break anything  
**effective** - does what it says its intend to do  
**follows policy** - documented, has approvals & isolation procedures  

Keys needed for successful change control  
- Visibility
- Planning & scheduling
- Defined standards that are followed
- Continuous delivery architecture that provides: predictability, scalability, repeatability, transparency   


## Change Approver
This is the person that reviews all of the actual code changes & accompanying document  
**They are ultimately on the hook for any issues that occurring during or resulting from the change**
- Evaluate it 
- ID dependencies & risks
- Confirm everyone can make the change and roll it back
- Make sure it will be safe effective and follow policy



# Change Planning & Execution
- **Should I be doing this?**
  - Know reason, risk, & intended outcome
  - Filed a "Change Request"
  - I am rested & able
  - Know the sequence of events that need to occur
- **Am I qualified to do this?**
  - Do I know how?
  - Do I have visibility/access to all the systems required to monitor the process
  - Is the dev environment good? Did any issues occur when the changes were made in this environment? 
  - Are the requisite tech resources available for support?
- **Can I control my changes?**
  - Have plan for making the change
  - Documentation on verification & rollback process
  - Know the risks
  - Know potential issues
- **Do I have a valid execution, rollback, and validation plan?**
  - Know all contingencies
  - In contact with external teams that may need to assist (like SRE)
  - Have talked to all stakeholders
  - Done a walkthrough 
  - Have written testing & validation plan
  - Ensured that any potential rollback would actually roll everything back
- **Does my plan isolate the changes?**  
*these steps are fairly specific to the infrastructure of PayPal, but the ideas are still valid*  
  - push to a single node > then pool > then availability zone
  - let the change "burn-in" and validate site health prior to applying the change to additional zones
- **Is everything documented and approved?**
  - "Change Request" is completely filled out  
  *i.e.: Jira/Trello/etc. thing you're using to document your work is completed & accurate*  
  - Risk level assignment is correct and has been approved by proper level:
    -  low: manager
    -  medium: manager + director 
    -  high: manager + director + senior director and/or VP of site ops
- **Is it scheduled to minimize impact?** 
  - not between 9am - 3pm PT
  - communicate w/ partners & stakeholders about SLA around returning availability


## Change Validation
- Validation testing is present, valid, & successful 
- wait 15 minutes prior to running validation testing

