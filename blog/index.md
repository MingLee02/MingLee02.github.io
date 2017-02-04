---
layout: main
bodyid: posts
title: Blog posts
---

<div>
    {% for post in site.posts %}
        <a href='{{ post.url }}'>{{ post.excerpt }}</a>
        {% if forloop.last == false %}<div class="divider"></div>{% endif %}
    {% endfor %}
</div>