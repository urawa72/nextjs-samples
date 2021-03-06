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
rm -rf .git
mkdir src
mv styles pages src

yarn add -D \
  npm-run-all \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  prettier \
  eslint-config-prettier \
  eslint-plugin-import \
	eslint-plugin-simple-import-sort \
  eslint-plugin-jsx-a11y

yarn dev
