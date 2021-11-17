# Changelog
All notable changes to this module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this module adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
- Updated template to use latest LTS Node.js 16.

## [1.3.0] - 2021-06-11
### Changed
- Test case must now be suffix with `.test.ts`.
- Update dependencies version.
- Dependencies now use caret `^` instead of `.x` to preserve the version used in template.
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
- Added lint rule `no-param-reassign`, which is used in TypeScript Cloud Function project created by Firebase CLI.

## [1.0.0] - 2020-11-21
### Added
- First public release.



[Unreleased]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.3.0...HEAD
[1.3.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/VeryCrazyDog/typescript-project-template/releases/tag/1.0.0
