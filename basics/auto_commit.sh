#!/bin/bash

cd /Users/ayushbisht/basics

git add .

if ! git diff --cached --quiet; then
    git commit -m "Auto update $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin ltcode
fi