#!/usr/bin/env bash

title=draft

if [ "$1" ]
then
    title=$1
fi

cp "_includes/templates/article.md" "articles/_$title.md"