# nextjs-samples

- Add package.json to some scripts

```json
"scripts": {
  "lint:check": "next lint",
  "format:check": "prettier --check '*.js' '**/*.{ts,tsx}'",
  "lint:fix": "next lint --fix",
  "format:fix": "prettier --write '*.js' '**/*.{ts,tsx}'",
}
```
