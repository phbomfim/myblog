---
title: Install and configure MongoDB on Ubuntu
date: "2021-06-29"
tags: ["mongodb","linux"]
published: true
description: "Install, configure and use MongoDB"
---

### How to install MongoDB on Ubuntu

- Go to MogoDB Docs and read this [document](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Main commands

- Start MongoDB process : ``` sudo systemctl start mongod ```
- Verify that MongoDB has started successfully : ``` sudo systemctl status mongod ```
- Stop the process : ``` sudo systemctl stop mongod ```
- Restart the process : ``` sudo systemctl restart mongod ```

And finally:

- Use mongo : ``` mongo ``
- To stop write : ``` exit ```