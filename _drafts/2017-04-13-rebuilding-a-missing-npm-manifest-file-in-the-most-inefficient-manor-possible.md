---
layout: post
title:  "Rebuilding a missing package.json file in the most inefficient manor possible"
date:   2017-04-13 13:00:00 -0500
categories: bash javascript npm build-tools
description: "This is short description"
---

**Repo:** [centrum-living](https://gitlab.doejo.com/garrettryan/centrum-living)

Came with gulp file and a node_modules & bower_components directories, but no `package.json` or `bower.json` files.  
`bower init` rebuilt `bower.json` (assume it only ran because I ran npm install first? or had bower installed globally).  
`npm init` rebuilt a `package.json`, but the results of that & `npm install` didn't have gulp or any of the repos required plugins installed. So I embarked on a massive time wasting effort to use bash to parse and install all of the stuff specified via the `require` statements in `gulpfile.js`.  

Little did I know that [this](https://www.npmjs.com/package/depcheck) & [this](https://www.npmjs.com/package/dependency-scan) are both things that probably would've have saved me some headaches.  
*perhaps make a point about always checking to see what problem you're actually trying to fix at any given stage of a task and reevaluate if there might be an easier way then your present path*


```sh

#Trying to echos the matches. It works in that it echos the static string the correct amount of times, but $match is empty. 
#...turns out bash_rematch can't do quotes I guess?
function rebuildPackgageJsonFromGulpfile () {
    local regex="require\(['\"](.*)['\"]\)"
    cat gulpfile.js | while read line    
    do        
        if [[ $line =~ $regex ]] 
        then
            echo 'you need to "npm install" :'
            match=${BASH_REMATCH[1]}
            echo $match
        fi
    done    
}

# Manually trims the "("" & everything before it, and the ")" & everything after it
# and uses that string as an argument for "npm install"
function rebuildFromGulpfile (){
    local regex='require\('.*'\)'
    cat gulpfile.js | while read line
    do
        if [[ $line =~ $regex ]] ; 
            then 
                local pckg=${line#*\(}; pckg=${pckg%%\)*}
                npm insall --save-dev ${pckg}                
        fi
    done    
}
```


[BASH_REMATCH can't do deal with quotes](http://stackoverflow.com/questions/13150411/why-does-bash-rematch-not-work-for-a-quoted-regular-expression)







