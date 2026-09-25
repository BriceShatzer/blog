# frozen_string_literal: true

source "https://rubygems.org"

# Single source of truth for the Ruby version: .ruby-version.
# Read by Bundler (>= 2.3.18), rvm/rbenv/mise, and ruby/setup-ruby in CI.
ruby file: ".ruby-version"

gem "jekyll", "~> 4.4"

# Dart Sass (sass-embedded). Jekyll 4.4 would resolve this anyway; pinned so the
# Sass implementation is an explicit decision, not a dependency-resolution side effect.
gem "jekyll-sass-converter", "~> 3.1"

# Rouge 4 reclassifies JS tokens (function calls nx->nf, classes nx->nc), which the
# Cayman/GitHub highlight theme colors differently -- that is a visible change to every
# code block. Pinned to preserve the current rendering. Unpinning is a deliberate,
# reviewable restyling of syntax highlighting, not a side effect of a build migration.
gem "rouge", "~> 3.30"

group :jekyll_plugins do
  gem "jekyll-feed",          "~> 0.17"  # /blog/feed.xml
  gem "jekyll-redirect-from", "~> 0.16"  # legacy category-path URLs
end

group :test do
  gem "html-proofer", "~> 5.0"
end

# Windows and JRuby ship without a system zoneinfo database.
gem "tzinfo-data", platforms: %i[windows jruby]
