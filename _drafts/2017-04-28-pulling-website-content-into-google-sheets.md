---
layout: post
title:  "Pulling website content into Google Docs"
date:   2017-04-28 13:10:38 -0500
categories: web google-sheets drive google
description: ""
---



## Importing values from web page elements
Use [IMPORTXML](https://support.google.com/docs/answer/3093342?hl=en) and a XPath query to pull in the contents of specific XML elements. 

[Getting an the xpath for an element](https://stackoverflow.com/a/42194160/1608016)



Also see `IMPORTHML` to bring in tables. 


importing from online .csv files 

[oshares wtf holdings in cvs form](http://oshares.com/file/_updates/holdings/held_OUSA.csv)

[Government Data](https://catalog.data.gov/dataset?res_format=CSV)


## `IMPORTHML` 

`=IMPORTHTML("http://www.techmeme.com/m/","list",2)` - Attempts to pull in a list of articles. Does not work since the content is nested inside a `table` element. Import results in a bunch of cells that say "[TABLE]"

`=IMPORTHTML("https://en.wikipedia.org/wiki/Portal:Current_events","list",2)`
ul > childNodes w/tagName="LI" > innerText

`=IMPORTHTML("https://gist.github.com/BriceShatzer/a2920819caa666171a2b11d60c46ff19","list",3)`

`=IMPORTHTML("https://gist.github.com/BriceShatzer/85bfe955f342f4fb44c7ff8bded484fc","table",1)`


"list" issues:  
- array of lists count both ordered (`ol`) & unordered lists (`ul`). Order is determined by order of appearance in DOM.  
- 
- If the content (i belive it's actually look for the ) is anything is nested inside the `li` 


[nodeName](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)/[tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName) = "LI" 
[bs around .nodeName case sensitivity](https://johnresig.com/blog/nodename-case-sensitivity/)


