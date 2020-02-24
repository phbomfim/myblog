---
title: Using Travis CI
date: "2019-09-25T10:44:43.000Z"
description: "Using Travis CI "
tags: ["git","ruby"]
published: true
---

## Travis CI

### Getting started

1. Create account on Travis CI (example: Github login) and login ( `$ travis login` OR `travis login --github-token`to login with your GitHub account).
2. Create a .travis.yml file OR when you init travis on prompt, the file will be created. (`$ travis init`)
3. Analyze the language version and etc. Edit to your case.
4. Push new files and analyze pull request.

### How to fix Postgres error ?

Add some lines in you .travis.yml file:

    > sudo: required
    > cache:
    > - bundler
    > services:
    > - postgresql
    > addons:
    >  postgresql: "10"
    > before_script:
    > - bundle exec rake db:create db:migrate

### How to parse .travis.yml syntax ?
- `$ travis lint .travis.yml`