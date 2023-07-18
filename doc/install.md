#### Install cypress

```bash
pnpm add cypress
pnpm cypress install
```

#### Install typescript

```bash
pnpm add typescript cross-env
```

#### Install eslint and prettier

```bash
pnpm add prettier
pnpm add eslint
pnpm add eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier
pnpm add @typescript-eslint/eslint-plugin
pnpm add @typescript-eslint/parser
```

Install cucumber

```bash
pnpm add @badeball/cypress-cucumber-preprocessor
pnpm add @cypress/browserify-preprocessor
```

#### Copy config files

```bash
.npmrc
.prettierignore
tsconfig.json
.eslintrc.json
package.json
```

#### Control parameters using `package.json`

Example

```bash
"c:run:headless:local:m": "cross-env CYPRESS_BASE_URL=http://localhost:3000 CYPRESS_SPEC_PATTERN=**/some-folder/**/*.feature cypress run --headless --browser chrome",
```