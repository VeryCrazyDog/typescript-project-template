# typescript-project-template
TypeScript Node.js project template. Updated for Node.js 16.

As a template, license is internally set to private but feel free to use this template as your new project starter.

## Setup
Base on project type, the following amendment on the project files can be considered.

For all projects:
1. Review lint rules in `.eslintrc.json` and remove unwanted lint rules.
2. If no test will be implemented, consider adding flag `--no-error-on-unmatched-pattern` to `eslint`
   in npm scripts `lint` and `fix` to avoid error due to unmatched pattern.

For application projects:
1. In `tsconfig-base.json`, the following options can consider to be removed.
   - `compilerOptions.declaration`
   - `compilerOptions.declarationMap`
2. In `package.json`, NPM script `scripts.prepack` can consider to be removed.
3. File `.npmignore` can consider to be removed.

For library projects intended for publish:
1. In `tsconfig-base.json`, the following options can consider to be removed.
   - `compilerOptions.declaration`
   - `compilerOptions.declarationMap`

For library projects within a monorepo:
1. In `tsconfig-base.json`, option `compilerOptions.sourceMap` can consider to be removed.
