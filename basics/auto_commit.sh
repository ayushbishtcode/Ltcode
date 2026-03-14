#!/bin/bash

cd /Users/ayushbisht/JAVASCRIPT/basics

git add .

if ! git diff --cached --quiet; then
    filename=$(git diff --cached --name-only | head -n 1)
    git commit -m "Updated $filename"
    git push origin ltcode
fi

