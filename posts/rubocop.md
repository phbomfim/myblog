---
title: Install and configure Rubocop
date: "2019-09-26"
tags: ["rails","travis"]
published: true
description: "Install, configure and fix any problems by Rubocop analysis"
---

### How to include Rubocop in Travis CI

- Add commands in travis.yml file:

    - `gem install rubocop`
    - `bundle install`
    - `rubocop`

### How to configure Rubocop analysis

- Create a .rubocop.yml file and configure.
- I relied on some sites and followed standards.
- References are listed below.
- The main reading : Ruby Style Guide.
- To check the settings, see the .rubocop.yml file.

### Readings

- [Ruby Style Guide written by Rubocop Team](https://rubystyle.guide).
- [CampusCode - Configurando o Rubocop (inclui o .rubocop.yml)](https://www.campuscode.com.br/conteudos/configurando-o-rubocop/).
- [Rubocop - GitHub](https://github.com/rubocop-hq/rubocop-rails/blob/master/.rubocop.yml/).
- [Style Guide do Shopify](https://shopify.github.io/ruby-style-guide/).
- [.rubocop.yml do Shopify](https://shopify.github.io/ruby-style-guide/rubocop.yml/).