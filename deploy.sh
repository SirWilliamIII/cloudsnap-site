#!/bin/bash
git pull origin master
if [ $? -eq 0 ]
then
# read -p "Commit message: " commit
 git commit -am "_"
 git push heroku master
fi
