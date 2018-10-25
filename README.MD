Or, Instead, Read teamlunch.kinja.com

Powered by [Jekyll](https://jekyllrb.com/) ([docs](https://jekyllrb.com/docs/home/))


**Running Locally**
```
// install
bundle install 

// run locally
bundle exec jekyll serve

// site available at http://localhost:4000/blog/
// pushing to master makes site live @ BriceShatzer.com/blog/
```


**Locations**  
- `blog/_posts/*` - [Posts](https://jekyllrb.com/docs/posts/)
- `blog/_drafts/*` - [Drafts](https://jekyllrb.com/docs/drafts/)  _preview them using:_ `jekyll serve --drafts`
- `blog/assets/post-file/*` - [Static files](https://jekyllrb.com/docs/static-files/) for posts

**_Note_**  
When referncing a path to a file/page, use the construct:  
`{{ "/" | relative_url }}"`  

This maintains all the pathing if the `baseurl` defined in `_config.yml` is updated. This originally wasn't an issue but [it appears](https://stackoverflow.com/questions/42450554/jekyll-site-works-locally-but-not-on-github-pages) a change occured with `jekyll-github-metadata v2.5.0` which caused something to break.
