---
title: Deploying GitHub application in Heroku
date: "2019-09-24"
tags: ["github", "git", "heroku"]
published: true
description: "Deploying nps-calculator application in Heroku"
---

### Error : sqlite3 don't working

- The gem sqlite3 does not work in Heroku.
- To deploy Rails on Heroku, I needed to remove 'gem sqlite' line in my Gemfile.
- I changed that line to 'gem pg'.
- `$ bundle install` --> `$ git push heroku master`
- After this step I had to run '$ rails db:migration' in Heroku.

- [Tutorial](https://devcenter.heroku.com/articles/sqlite3)

### How to configure Travis CI in Heroku

- Read later : [Heroku Deployment](https://docs.travis-ci.com/user/deployment/heroku/)