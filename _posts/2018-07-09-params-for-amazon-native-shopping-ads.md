---
layout: post
title:  "Amazon is Worth $800 Billion & Apparently I Have to Write Their Documentation"
redirect_from: 
    - /amazon/ads/publishing/2018/07/09/params-for-amazon-native-shopping-ads/
    - /amazon/ads/publishing/2018/07/09/params-for-amazon-native-shopping-ads.html
date:   2018-07-09 12:00:00 -0500
categories: development
tags: Amazon ads publishing
description: "The documentation that should exist on the parameters that can be set for the Amazon Affiliate Native Shopping Ads."

---

_This post covers how to define/interact with [Amazon Native Shopping Ads](https://affiliate-program.amazon.com/help/node/topic/G202102890) in a programmatic manner and assumes you already have a basic understanding of what they are and how they work._ 


_Useful links from this post:_  
- _["Official Ad Code Parameters"](#the-official-parameters-for-native-shopping-ads)_  
- _[All 137 values that onejs is looking for on the global scope](https://gist.github.com/BriceShatzer/f2a884a38f023d08024b369479926bd7)_  
- _[Amazon's onejs file unminified](https://gist.github.com/BriceShatzer/419fed1a315362c2e60a1f128ed02fa1)_



## Background & the problem at hand...  

[Amazon Native Shopping Ads](https://affiliate-program.amazon.com/help/node/topic/G202096040) can be controlled by setting specific values on the global scope prior to loading the [onejs](https://z-na.amazon-adsystem.com/widgets/onejs) script which is responsible for creating the ad. 
You can [see this]({{ "/assets/post-files/2018-07-09-params-for-amazon-native-shopping-ads/copy-ad-code.png" | relative_url}}) when using the ["Create Custom Ads" tool](https://affiliate-program.amazon.com/home/ads/adcode/custom). If you play around with some of the advance settings, you'll notice that providing different parameters changes how the ad looks & behaves. 

One of these ads had been implemented previously and I was now tasked with getting it to look & behave a particular way. The pattern the widget used of setting certain values prior to loading seemed straight forward enough, so I set to work. First, I tried looking for [documentation](https://affiliate-program.amazon.com/resource-center/) around what parameters could actually be set and what they do.
[As far as I can tell](https://engagedforums.com/discussions/Amazoncom_Associates/Discussions/List_of_available_amzn_assoc__values_for_Native_Ads/am-associhelp/50474.1?redirCnt=2&dbg=6&nav=messages), that information doesn't exist publicly and the info that is available is basically just [forum users throwing things against the wall and seeing what sticks](https://engagedforums.com/discussions/Amazoncom_Associates/Discussions/List_of_available_amzn_assoc__values_for_Native_Ads/am-associhelp/50474.1?redirCnt=2&dbg=6&nav=messages).

My next thought was to [unminifiying the one.js](https://gist.github.com/BriceShatzer/419fed1a315362c2e60a1f128ed02fa1) that is actually responsible for constructing the ad and pulling out all of the values that it looks for. 

Many of the naming conventions they use rely on a lot of acronyms and/or are generic enough that they don't give good enough context clues as to what they actually do, but it did provide me with a list of [137 values](https://gist.github.com/BriceShatzer/f2a884a38f023d08024b369479926bd7) to start to play around with. This let me start to control some fairly rudimentary thing like: 

```
amzn_assoc_widget_padding = "12";
amzn_assoc_text_style = "font-size: 17px;font-weight: normal;";
```

Having been working at [peak efficiency]({{ "/assets/post-files/2018-07-09-params-for-amazon-native-shopping-ads/peak-efficiency.svg" | relative_url}}) with our counterparts at Amazon up to this point while trying to implement this ad unit, I specifically asked if they had any documentation around those 137 values that they could share. Eventually we received...


## [The Official Parameters for Native Shopping Ads](https://youtu.be/OFr74zI1LBM) 
The tables below cover all the possible ad code parameters used for Native Shopping Ads.
This information was provided by an Amazon Account Manager & PM that my team was working with to implement these sorts of ads.


|Parameter Name | Sample Value(s) | Description |  
| ------------- |:------------- | :-----|  
|amzn_assoc_ad_type | `"smart"` | Required. Ad type of smart is used for NSA. |  
|amzn_assoc_region |  `"US"` | Required. Region - currently only US. |  
|amzn_assoc_marketplace |  `"amazon"` | Required. Currently only amazon. |  
|amzn_assoc_linkid |  `"4e5a800706eeb232402189e87baaff82"` | Required. Link id is unique every time ad code is generated from AC. |
|amzn_assoc_placement | `"adunit0"` | Not used currently, but is a required field. This free form text field could be a useful attribute for optimization of ad selection and ranking." |
|amzn_assoc_tracking_id |  `refaiz-20"` | Required. Tracking ID of the associate - used for tagging Amazon retail session of the customer with the publisher who referred." |
|amzn_assoc_debug | `true` | Enable debug mode. |
|amzn_assoc_aax_src_id | `308` | Force to a particular AAX source id like 308 or 330. Used in production for certain head publishers like CNET, where we might not want certain bidders to bid. |
|amzn_assoc_title | `"Shop Related Products` | Title of the ad unit. Note that this might not be available for certain design types (Card format). By default Strip format does not have a title as it is intended for in content placement. |
|amzn_assoc_header_style | `"font-size: 18px; font-weight: bold;"` | Customize CSS style of the header (title). |
|amzn_assoc_link_style | `"font-size: 15px !important; color: #373737; line-height: 18px;"` | Customize CSS style of the product titles. |
|amzn_assoc_link_hover_style | `"text-decoration: underline;"` | Customize CSS hover style of the product titles. |
|amzn_assoc_text_style | `"font-size: 17px;font-weight: normal;"` | Customize CSS style of Price. |
|amzn_assoc_ad_mode | `"auto"`<small> - Recommendation Ads </small><br />`"search"`<small> - Search Ads</small><br />`"manual"`<small> - Custom Ads</small>| Required. Specify type of NSA. |
|amzn_assoc_asins | `"B075D4SL1T,B01NBTSVDN,B01MT5EV2B"` | Required for Custom Ads to specify ASINs to render. |
|amzn_assoc_random_permute | `"true"` | Used for shuffling order or ASINs provided for Custom ads. |
|amzn_assoc_render_full_page | `"true"` | Enabling this parameter will cause the ad markup to contain a full HTML page - including the `<html>` `<body>` tags, meant to be rendered inside an iFrame. |
|amzn_assoc_default_search_phrase | `"Harry Potter"` | Required for Search Ads. |
|amzn_assoc_default_category | `"All"`<br />`"Wireless"`<br />`"Apparel"` | Required for Search Ads to restrict search results to specific category. |
|amzn_assoc_fallback_mode | `{"type": "search","value": "Harry Potter"}` | Fallback search keywords used for Auto ads to show in case there are no recommendations for the page. |
|amzn_assoc_url | `"http://groomandstyle.com/top-5-best-home-teeth-whitening-kit- reviews/"` | Load recommendations as if the ad is loading from specified URL. |
|amzn_assoc_axf_exp_name<br/>amzn_assoc_axf_treatment | `amzn_assoc_axf_exp_name="NSA_Borders_4081"`;<br/>`amzn_assoc_axf_treatment="T1"`; | These 2 params are used together to force a particular experiment.
|amzn_assoc_design | `""`<small> - (not specified) Default. We serve Grid format by default, but it could be replaced by card format in special cases (only one recommendation).</small><br/>`"standard_grid"`<small> - Force Grid format.</small><br />`"enhanced_links"`<small> - Card format.</small><br/>`"text_links"`<small> - List format.</small><br/>`"in_content"`<small> - Strip format.</small> | Used to specify NSA variant.|



### Grid Format  
Parameters specific to the Grid format.  

|Parameter Name | Sample Value(s) | Description |
| ------------- |:------------- | :----- |
| amzn_assoc_width | `"200"` | Restrict the width of the ad unit (in pixels). Number of cards rendered depends on this width. AC restricts this input between 130-600. |
| amzn_assoc_height | `"700"` | Height restriction - this value is used only to decide the number of rows displayed and does not control the height of the cards! AC restricts this input between 400-2000. |
| amzn_assoc_size | `"autox700"` | A combination of the above parameters. Provided as widthxheight. |
| amzn_assoc_search_bar | `"true"` | Enable/disable the search bar. |
| amzn_assoc_search_bar_position | `"bottom"`, `"top"` | Position of the search bar. |
| amzn_assoc_disable_borders | `"true"` | Enable/disable borders around the NSA cards. Default value for this parameter is "false" for Recommendation ads and "true" for Search and Custom ad formats. |
| amzn_assoc_attributes | `"false"` | Enable/disable attributes like pricing, prime, star rating etc. If disabled, only title and image of the products will be shown. |
| amzn_assoc_carousel | `"true"` | Enable/disable carousel. Enough ASINs should be available for the carousel to show up. |
| amzn_assoc_feedback_enable | `"true"`, "false" | Enable/disable Ad Feedback feature. Is true by default for Recommendation ads. |
| amzn_assoc_rows | `"1"` | Number of rows to be shown. Max value possible: 5 |
| amzn_assoc_max_ads_in_a_row | `"4"` | Max number of cards to be shown per row. Default value is 4. Max value possible: 5 |
| amzn_assoc_list_price | `"false"` | Show/hide strike out price. |
| amzn_assoc_prime | `"false"` | Show/hide Prime logo for Prime eligible ASINs. |
| amzn_assoc_prime_position | `"inline_price"`, `"bottom"` | Customize position of the prime logo. By default is "inline_price". "bottom" will push the prime logo to the bottom of the card in a new row. |
| amzn_assoc_widget_padding | `"13"` | Padding around the ad unit. Default is 0. |
| amzn_assoc_strike_text_style | `"display: inline-block;font- size: 13px;color: #9B9B9B;"` | Customize CSS style of strikeout price. |
| amzn_assoc_brand_text_link | `"false"` | By default, "Ads by Amazon" links to homepage of NSA in the affiliate portal. Setting this param to "false" will remove this link. |
| amzn_assoc_brand_position | `"top"`, `"bottom"` | Position of "Ads by Amazon". By default is "bottom". |
| amzn_assoc_large_rating | `"true"` | Makes the star ratings larger in size. |
| amzn_assoc_rating_position | `"above_price"`, `"below_price"` | Position of the star rating. By default, is "below_price". |
| amzn_assoc_max_title_height | `"55"` | Maximum height of the product titles container. Default value is 47. |


### Strip Format  
Parameters specific to the Grid format.  

|Parameter Name | Sample Value(s) | Description |
| ------------- |:------------- | :-----|
| amzn_assoc_enable_swipe_on_mobile | `"false"` | Enable/disable carousel swipe mode on mobile. By default is "true". |


## Closing thoughts

If you're going provide a technical service that will _explicitly_ generate revenue for you, perhaps it might be a good idea to provide some public facing documentation. 


<!-- 
     It's mind blowing that this sort of documentation isn't available anywhere inside Amazon's labyrinth of a resource center. 

You can use the [editor on GitHub](https://github.com/BriceShatzer/blog/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

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
