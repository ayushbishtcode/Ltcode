#!/bin/bash

cd /Users/ayushbisht/JAVASCRIPT/basics

git add .

if ! git diff --cached --quiet; then
    git commit -m "Auto update $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin ltcode
fi