# nextjs-samples

- Add package.json to some scripts

```json
"scripts": {
  "lint": "run-s lint:*",
  "lint:eslint": "eslint .",
  "lint:prettier": "prettier --check '*.js' '**/*.{ts,tsx}'",
  "lint-fix": "run-p lint-fix:*",
  "lint-fix:eslint": "eslint . --fix",
  "lint-fix:prettier": "prettier --write '*.js' '**/*.{ts,tsx}'",
}
```
