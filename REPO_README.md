# Repo set-up with a linter, formatter, and type checking.

## Install Dependencies

Run the following command in your project root:

```bash
# Install ESLint, Prettier, TypeScript, and related plugins
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Install Husky & Lint-Staged
yarn add -D husky lint-staged

```

## Configure ESLint (.eslintrc.json)

Create an .eslintrc.json file:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
  }
}
```

## Configure Prettier (.prettierrc)

Create a .prettierrc file:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

## Configure TypeScript (tsconfig.json)

If you're using TypeScript, ensure you have a tsconfig.json(This already comes with the hono create app):

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Setup Husky & Lint-Staged

Run:

```bash
yarn husky install

```

This creates a .husky folder. Now, configure lint-staged by adding this to package.json:

```json
"lint-staged": {
  "**/*.{ts,js}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

Enable Husky pre-commit hook:

```sh
yarn husky add .husky/pre-commit "yarn lint-staged"

```

## Verify Setup

Try committing a file with issues, and Husky should block the commit if there are errors.
