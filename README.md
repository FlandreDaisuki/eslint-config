# @flandredaisuki/eslint-config

Adjust from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Usage

### Install

```bash
pnpm i -D eslint @flandredaisuki/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@flandredaisuki"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
