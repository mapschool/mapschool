# You As Contributor

`mapschool` is an open source text: that means that it is licensed under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/), basically an equivalent
of [Public Domain](http://en.wikipedia.org/wiki/Public_domain). That means
that if you contribute something to `mapschool`, you're agreeing that it should
be free for everyone forever.

If `mapschool` becomes a thing that gets distributed in a fancy way, like
in print, we'll do our best to credit everyone who contributes, thanks to
the power of `git` and GitHub's contributors feature.

# Concept

`mapschool` is an introduction to geospatial and map concepts. It is not a guide
to specific software, and is unconcerned with busywork and historical notes. It
is an introduction that covers as much of the field as possible, without attempting to define every term and explain everything.

It is written for a high-school reading level and tries not to rely on deep knowledge of any other domain.

Prior art is maintained in the `furtherreading.md` document alongside `mapschool`. Cross-references, if any, should be recorded in this document.

# Extras

Since the `/` landing page of `mapschool` is short and should stay that way,
we have an escape hatch: _extras_. These are additional articles that provide
more detail to certain concepts. See [existing extras under the `_posts` directory](https://github.com/tmcw/mapschool/tree/gh-pages/_posts).

To add a new extra, name it `_posts/0100-01-01-NAME.md` and add a header like

```
---
title: "mapschool: datum"
layout: default
language: en
permalink: datum.html
---
```

Change the word 'datum' to the topic of the page. Then you can link to the page
from mapschool:

```html
<a class='further-reading' href='/datum.html'>read more about datums</a>
```

Links to extras should come at natural breaks in sections rather than in paragraphs
themselves, and should follow the same format like 'read more about elephants'.

# Practical

The content of `mapschool` is a single page document ([`index.md`](https://github.com/tmcw/mapschool/blob/gh-pages/index.md)) maintained in the [Markdown](http://daringfireball.net/projects/markdown/) format. The content in that file is used to generate the web version of this text that lives at at [MapSchool.io](http://mapschool.io/), and so all contributions should be made by editing [`README.md`](https://github.com/tmcw/mapschool/blob/gh-pages/README.md).

It should be readily accessible as a web page, but should also be understandable
in full as a printout or PDF; that is, it does not rely on dynamic examples or hyperlinks.

The structure of the document is defined by headings, which range from `h1` to
`h4`. The fifth heading, `h5`, is a special case: `h5` sections are considered
'additional reading' and may be hidden and toggled by web interfaces.

# Purpose

`mapschool` is designed for self-learners and usable for traditional classroom
experiences and industry. To make this possible, it is a free document under a
[CC0 License](http://creativecommons.org/publicdomain/zero/1.0/). In practical terms for
this project, that means that printouts, re-publication, adaptations into
product manuals, and any other creative usage is permitted, as long as attribution - a reference back to `mapschool` - is given.

# Style

* `mapschool` is written in casual Standard Written English.
* [Avoid unnecessary gendered language](http://writingcenter.unc.edu/handouts/gender-sensitive-language/)
* Spell & grammar check your writing

# Translation

We love translations, and are keeping it simple for now. While `mapschool` is
maintained in American English as `index.md`, please add translations as
`index.language.md`, preferably using a [standard language subtag](http://people.w3.org/rishida/utils/subtags/).
