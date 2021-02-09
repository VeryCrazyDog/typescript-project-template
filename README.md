# typescript-project-template
TypeScript Node.js project template. Updated for Node.js 14.

As a template, license is internally set to private but feel free to use this template as your new project starter.

## Setup
Base on project type, the following amendment on the project files can be considered.

For application project:
1. In `tsconfig.json`, option `compilerOptions.declaration` can consider to be removed.
2. In `package.json`, NPM script `scripts.prepack` and file `.npmignore` can consider to be removed.

For library project:
1. In `tsconfig.json`, option `compilerOptions.sourceMap` can consider to be removed.
