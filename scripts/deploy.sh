#!/bin/bash
set -o errexit

# config
git config --global user.email "clark.kent@dailyplanet.org"
git config --global user.name "Superman"

# deploy
ls
cd dist
ls
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force "https://${githubToken}@$github.com/brion25/brion25.github.io.git" master