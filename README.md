# BriceShatzer.com/blog

Powered by [Jekyll](https://jekyllrb.com/) ([docs](https://jekyllrb.com/docs/home/)).
Published at <https://briceshatzer.com/blog/>.

> The apex domain and its `CNAME` live in the **BriceShatzer.github.io** repo.
> Never add a `CNAME` file here.

## Running locally

Requires the Ruby in `.ruby-version` (3.4.11).

```sh
bundle install
bundle exec jekyll serve            # http://localhost:4000/blog/
bundle exec jekyll serve --drafts   # include _drafts/
```

## Deployment

Pushing to `master` triggers `.github/workflows/pages.yml`, which builds with
`JEKYLL_ENV=production` and deploys via GitHub Pages. Pull requests build but do not
deploy; they attach the built site as a downloadable `site-preview` artifact.

This repo does **not** use the `github-pages` gem or the legacy branch builder, so it is
not pinned to Jekyll 3 and can use any plugin, including `_plugins/`.

## Writing a post

```yaml
---
title:  "Some Title"
date:   2026-10-01 12:00:00 -0500   # original publish date; never edit after publishing
permalink: "/some-title"            # clean slug, no date
description: "One sentence -- feeds the index, the Atom <summary>, and social cards."
categories: development
tags: some tags here
---
```

Filename is still `_posts/2026-10-01-Some-Title.md` (Jekyll needs the date prefix to
recognize a post), but the **URL comes from `permalink:`**, so the two are independent.
`layout: post` is applied automatically by `_config.yml` defaults.

- **`date:`** is the original publish date. It no longer affects the URL.
- **`last_modified_at:`** is optional; add it when you revise a post. It drives the
  "updated" line, the Atom `<updated>`, the sitemap `<lastmod>`, the JSON-LD
  `dateModified`, and it moves the post back to the top of the index
  (`_plugins/sort_date.rb` computes `sort_date = last_modified_at || date`).
- **`description:`** is required in practice -- it is the meta description and the
  social-card text.

The 11 existing posts keep their original date-prefixed URLs, pinned via `permalink:`.
New posts use clean slugs, so no URL ever moves and no redirect is ever needed.

## Locations

| Path | What |
|---|---|
| `_posts/*` | [Posts](https://jekyllrb.com/docs/posts/) |
| `_drafts/*` | [Drafts](https://jekyllrb.com/docs/drafts/) |
| `assets/post-files/*` | [Static files](https://jekyllrb.com/docs/static-files/) for posts |
| `_sass/*` | Vendored `jekyll-theme-cayman` styles (the gem is no longer a dependency) |
| `_plugins/*` | Build-time Ruby hooks |
| `brice-readme.md` | A published *page* (`/blog/readme.html`), not developer docs |

## Conventions

**Paths.** Reference files with `{{ "/path/to/file" | relative_url }}` rather than
hardcoding `/blog/`. This keeps pathing correct if `baseurl` in `_config.yml` changes.

**Code blocks.** Fenced blocks with a language hint, e.g. ` ```javascript `
([supported lexers](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers)).
Un-languaged blocks render as `language-plaintext`.

> `rouge` is pinned to `~> 3.30` in the `Gemfile`. Rouge 4 reclassifies JS tokens, which
> the highlight theme colors differently -- upgrading restyles every code block, so it
> should be a deliberate change.

## Live consumer

`https://briceshatzer.com/` fetches `/blog/posts` (see `api-posts.html`) and renders the
4 most recent entries. Its URL, the `date` string format, and the `date`/`url`/`title`/
`description` field names are load-bearing across repos.
