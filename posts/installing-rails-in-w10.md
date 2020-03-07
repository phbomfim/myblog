---
title: Installing Rails in Windows 10
date: "2019-09-23"
tags: ["rails", "windows","postgresql"]
published: true
description: "How to configure Rails and PostgreSQL in Linux Workspace (Windows 10)"
---

## How to configure PostgreSQL on Ubuntu 18.04 and Windows 10 (Linux Workspace)

### Installing PostgreSQL

- Install :
> sudo apt update
> sudo apt install postgresql postgresql-contrib

- Verifying PostgreSQL Installation :
> sudo -u postgres psql -c "SELECT version();"

- If not run :
> sudo su - postgres
> psql

### Configurations

- Create User (in PostgreSQL prompt):
> createuser --interactive


## How to fix "Error installing pg: Failed to build gem native extesion"

> sudo apt-get install ruby-dev build-essential

- if not run

> sudo apt-get install postgresql-client libpq5 libpq-dev
> sudo gem install pg

## How to fix "PG::ConnectionBad" error

- My PostgreSQL's default port is 5433 but in rails db configuration, the default port is 5432.
- To fix this, I'm run :
> sudo service postgresql start
> pg_lsclusters
> sudo nano /etc/postgresql/9.3/main/postgresql.conf
> sudo sertvice postgresql restart

## How to fix "role not exists" or "database not exists" errors

- I needed create my admin user:
> sudo -u postgres createuser paulobomfim

- And create each db :
> sudo -u postgres createdb DATABASENAME

## How to fix Webpacker problems

- [Install yarn on Ubuntu](https://hostinger.com/tutorials/how-to-install-yarn-on-ubuntu/)

## Readings

- [How to install PostgreSQL on Ubuntu](https://linuxize.com/post/how-to-install-postgresql-on-ubuntu-18-04/).
- [Como instalar PostgreSQL no Ubuntu](https://www.hostinger.com.br/tutoriais/instalar-postgresql-ubuntu/).
- [Gem install pq won't work](https://stackoverflow.com/questions/4564117/sudo-gem-install-pg-wont-work/).