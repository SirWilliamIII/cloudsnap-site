#!/bin/bash

git pull origin master

if [[ $? -eq 0 ]]
then


git commit -am "_"
git push heroku master

fi
