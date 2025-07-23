---
layout: default
title: Updates
permalink: /updates/
---

<section class="updates-container">
  <h1 class="updates-title">Updates</h1>
  <ul class="updates-list">
    {% for post in site.posts %}
      <li class="update-item">
        <a href="{{ post.url | relative_url }}">
          <h2>{{ post.title }}</h2>
        </a>
        <p class="meta">
          {{ post.date | date: "%-d %B %Y" }}
          {% if post.tags %}
            · <span class="tag">{{ post.tags[0] }}</span>
          {% endif %}
        </p>
        {% if post.description %}
          <p class="description">{{ post.description }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>

