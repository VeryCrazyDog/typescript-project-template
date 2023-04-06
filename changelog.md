# Changelog
All notable changes to this module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this module adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Remove `dist` directory before build using `rimraf`.
- Set `declarationMap` to `true` in `tsconfig-base.json` for [library source code navigation in a monorpeo].
- Set `declaratioremoveCommentsnMap` to `true` in `tsconfig-base.json`.
### Changed
- npm script `lint` now also automatically fix source code problems.
- Engine versions now use caret `^` instead of `.x` to preserve the exact version used in template.
- Changed the way to set up ESLint configuration files.
- Updated template to use latest LTS Node.js 18 and npm 9.
- Update dependencies version.
### Removed
- Deprecated npm script `fix`, use `lint` instead.
### Fixed
- Avoid `tsc --build test` generate output next to `.ts` source code.

## [3.0.0] - 2022-03-01
### Added
- Set `skipLibCheck` to `true` in `tsconfig-base.json` as it is the default value when running `tsc --init`.
### Changed
- Source code for testing is now separated from application source code using TypeScript project reference.
- Removed ignore of return code for lint and lint fix, as npm v8 no longer prompt error on error exit.
- Update dependencies version.
- Update `.gitignore`.

## [2.0.2] - 2021-12-06
### Fixed
- Fix README not updated for Node.js 16.

## [2.0.1] - 2021-12-01
### Fixed
- Fix `tsconfig.json` not updated for Node.js 16.

## [2.0.0] - 2021-11-17
### Added
- Added lint rule `no-alert` to avoid unintended behavior.
- Lint rules `prefer-rest-params` and `prefer-spread` are added back, as it is easier
  for user to remove unwanted rules.
- Added the following coding style lint rules:
	- `@typescript-eslint/consistent-type-imports`
	- `import/no-default-export`
	- `import/order`
	- `sort-imports`

### Changed
- Allow non-null assertion in test case files.
- Updated template to use latest LTS Node.js 16 and npm 8.

## [1.3.0] - 2021-06-11
### Changed
- Test case must now be suffix with `.test.ts`.
- Update dependencies version.
- Dependencies now use caret `^` instead of `.x` to preserve the exact version used in template.
- Use stricter version of engines specification.

### Removed
- Lint rules `prefer-rest-params` and `prefer-spread` as that only matter style.
- Lint rule `strict` as it doesn't seems to make sense in TypeScript.
- Removed `.eslintignore` from `.npmignore` as we no longer use `.eslintignore`.

### Fixed
- Fixed incorrect `ignorePatterns` in `.eslintrc.json` to relative path.
- Missing lint rule `no-shadow`.

## [1.2.0] - 2021-02-10
### Changed
- Move ignore files in `.eslintignore` to `.eslintrc.json`.
- Remove `./` from path to make path simpler.

## [1.1.0] - 2020-12-23
### Added
- Added lint rule `no-param-reassign`, which is used in TypeScript Cloud Functions project created by Firebase CLI.

## [1.0.0] - 2020-11-21
### Added
- First public release.



[Unreleased]: https://github.com/VeryCrazyDog/typescript-project-template/compare/3.0.0...HEAD
[3.0.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/2.0.2...3.0.0
[2.0.2]: https://github.com/VeryCrazyDog/typescript-project-template/compare/2.0.1...2.0.2
[2.0.1]: https://github.com/VeryCrazyDog/typescript-project-template/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.3.0...2.0.0
[1.3.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/VeryCrazyDog/typescript-project-template/releases/tag/1.0.0
[library source code navigation in a monorpeo]: https://stackoverflow.com/questions/54459847/vscode-lerna-typescript-monorepo-code-navigation
