#!/bin/bash
set -o errexit

# config
git config --global user.email "clark.kent@dailyplanet.org"
git config --global user.name "Superman"

# deploy
echo -e "\e[92m-----> Building the App <-----"
npm run build
cd dist
echo -e "\e[92m-----> Deploying to Github <-----"
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force "https://${GITHUB_TOKEN}@github.com/brion25/brion25.github.io.git" master
echo -e "\e[92m-----> Code deployed to Github <-----"
