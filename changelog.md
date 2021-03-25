# Changelog
All notable changes to this module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this module adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Update dependencies version

### Fixed
- Fix incorrect `ignorePatterns` in `.eslintrc.json` to relative path.

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



[Unreleased]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.2.0...HEAD
[1.2.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/VeryCrazyDog/typescript-project-template/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/VeryCrazyDog/typescript-project-template/releases/tag/1.0.0
