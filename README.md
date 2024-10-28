# @flandredaisuki/eslint-config

## Getting Started

> [!IMPORTANT]
> Only support `eslint@>=9` flat config

### installation

```sh
pnpm add -D @flandredaisuki/eslint-config
```

### config

```js
// eslint.config.js
import flandre from '@flandredaisuki/eslint-config'

/** @satisfies {import('eslint').Linter.Config[]} */
export [
  ...flandre.preset,
  {
    // ... your custom rules
  }
]
```

### config inspector

```sh
pnpm dlx @eslint/config-inspector@latest
```
