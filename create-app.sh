#!/usr/bin/env bash

set -eu

if [ $# != 1 ]; then
  echo "set app name in arg 1"
  exit 1
fi

npx create-next-app@latest $1 --ts

cp eslintrc.template.json $1/.eslintrc.json
cp prettierrc.template.json $1/.prettierrc.json

cd $1

npm i -D --save-exact \
  eslint-config-prettier \
  prettier
