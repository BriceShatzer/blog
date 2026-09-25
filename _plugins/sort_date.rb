# frozen_string_literal: true

# Gives every post a `sort_date` equal to `last_modified_at` when present and `date`
# otherwise, so templates can order by "most recently touched" while `date` stays the
# immutable original publish date.
#
# Liquid's `sort` filter takes a single property with no coalesce, which is why this is
# Ruby and not a template: `sort: "last_modified_at"` would bucket every never-revised
# post together at one end regardless of its publish date.
#
# This requires a non-safe build. It is one of the things that only became possible by
# moving off the legacy github-pages builder, which forced `safe: true` and disabled
# _plugins/ entirely.
#
# Failure mode if this file is removed: index ordering degrades to whatever `sort_date`
# resolves to (nil). Permalinks are pinned in each post's front matter and do NOT
# depend on this hook.
Jekyll::Hooks.register :site, :post_read do |site|
  site.posts.docs.each do |post|
    updated = post.data["last_modified_at"]

    # YAML parses a bare `2026-10-01` as a Date and `2026-10-01 09:30:00 -0500` as a
    # Time. Jekyll only normalizes the `date` key, so do it here -- comparing a Date
    # against a Time inside Liquid's sort raises.
    unless updated.nil? || updated.is_a?(Time)
      updated = Jekyll::Utils.parse_date(
        updated.to_s,
        "Post #{post.relative_path} has an unparseable `last_modified_at`."
      )
    end

    post.data["sort_date"] = updated || post.data["date"]
  end
end
