---
layout: post
title:  "Awful Things You Shouldn't Do"
date:   2022-03-02 12:00:00 -0500
categories: development
description: "Bad things I've done & why I did them."
---
## Everything is held together by duct tape and string...

Tell the story about index funds and use it as a metaphor about using what you've got to do what you need?  


## Git 


### Alias for committing and pushing changes without a message
 
```shell
git config --local alias.quick "! git commit --allow-empty-message -a -m '' && git push"

```

![Terminal Output]({{ "/assets/post-files/2022-03-02-awful-things/quick-alias-full.png" | relative_url }})

talk about how I have my notes as gists and how you can clone gists. But full git workflow for notes is dumb and bad. 


### Overwriting Remote - yolo

```
alias gityolo='git commit -am "DEAL WITH IT" && git push -f origin master'
``` 
or 
https://github.com/atongen/yolo


<!--

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/BriceShatzer/blog/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
-->
