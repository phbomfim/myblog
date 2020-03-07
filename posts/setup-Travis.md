---
title: Setup Travis
date: "2019-09-27"
tags: ["travis","rails"]
published: true
description: ""
---

### How to configure Rubocop in Travis

- I defined rubocop in Gemfile.
- In travis file, the heroku deploy is:

```
 deploy:
   provider: heroku
   api_key: " "
   app: paulobommfim-nps-calculator
   on: develop
```

- The script order look like this :

```
bundle install`
yarn install --check-files
bundle exec rake db:create db:migrate
bundle exec rubocop 
bundle exec rake test
```

### How to configure Travis with JS application

- To run yarn in Travis, need these lines :
```
before_install:
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --1.17.3
export PATH="$HOME/.yarn/bin:$PATH"`
```
- Next step from this work: find solution to connect Github-token

### Readings

- [Defining variables in repository settings](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings)