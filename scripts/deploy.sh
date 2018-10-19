#!/bin/bash
set -o errexit

# config
git config --global user.email "clark.kent@dailyplanet.org"
git config --global user.name "Superman"

# deploy
cd dist
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${githubToken}@$github.com/brion25.github.io.git" master