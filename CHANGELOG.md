# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Update error handling docs

## [0.36.0] - 2024-11-11

### Added

- Introduce MSSError to improve error handling

### Changed

- Require Node.js v22
- Use top level await in example
- Use wretch (based on fetch) for requests

## [0.35.0] - 2024-10-29

### Changed

- Revert type of Picture.url to `string` string again. Type `URL` causes compatiblity issues.

## [0.34.0] - 2024-10-28

### Added

- Install Prettier v3 as a dev dependency

### Changed

- Update dependencies
- Format all supported files with Prettier v3
- Change Picture.url type from string to URL
- Rewrite picture URLs to https://cdn.easychannel.it/…

## [0.33.0] - 2024-10-17

### Changed

- Add CIN (Codice Identificativo Nazionale) which MSS now returns
- Update dependencies

## [0.32.0] - 2024-07-01

### Changed

- Update dependencies

## [0.31.0] - 2024-05-08

### Changed

- Update dependencies

## [0.30.0] - 2024-03-06

### Changed

- Remove warning about this library being experimental
- Update dependencies
- Remove unnecessary .prettierignore file

## [0.29.0] - 2024-01-04

### Changed

- Set minimum Node.js version to v20

### Fixed

- Add missing @types/node package

### Changed

## [0.28.0] - 2024-01-04

### Changed

- Update dependencies
- Replace ts-node with tsx

## [0.27.0] - 2023-10-04

### Changed

- Bump to package-lock.json version 3

## [0.26.0] - 2023-10-04

### Changed

- Update dependencies

## [0.25.0] - 2023-06-22

### Changed

- Update dependencies

## [0.24.0] - 2023-04-06

### Changed

- Update package name @bookingsuedtirol/mss-nodejs where forgotten

## [0.23.0] - 2023-04-06

### Changed

- Rename package to @bookingsuedtirol/mss-nodejs

## [0.22.0] - 2023-04-06

### Changed

- Update example in README.md to ESM

### Fixed

- Fix exports of request/response types

## [0.21.0] - 2023-04-06

### Changed

- Convert package to ESM (**breaking change**)
- Use SWC with ts-node for development
- Update dependencies

## [0.20.0] - 2023-03-17

### Changed

- Update dependencies
- Update repository URL

## [0.19.0] - 2022-11-11

### Changed

- Update dependencies

### Added

- Add runnable example command

## [0.18.0] - 2022-09-15

### Changed

- Update dependencies

## [0.17.0] - 2022-02-22

### Changed

- Make TSConfig stricter
- Update dependencies

## [0.16.0] - 2022-01-18

### Changed

- Update dependencies
- MSS only returns zero or one logos per hotel. Change `hotel.logo?: Picture[]` to `hotel.logo?: Picture` because of this.

## [0.15.0] - 2022-01-12

### Changed

- Update dependencies
- Update example and code in README.md to async/await

### Added

- Set the MSS request timeout to 20 seconds

## [0.14.0] - 2021-12-27

### Changed

- Update dependencies

## [0.13.0] - 2021-11-24

### Added

- Add `width` and `height` to `Picture`

## [0.12.0] - 2021-11-18

### Changed

- Update dependencies
- Update TypeScript target to ES2021

## [0.11.0] - 2021-10-20

### Changed

- Update dependencies
- Remove _node-fetch_ dependency
- Throw an error if MSS returns an error or responds with status codes >= 400

## [0.10.0] - 2021-09-28

### Changed

- Update dependencies
- Stricter TS configuration settings

### Security

- Add an alias to @xmldom/xmldom. The old xmldom package has been deprecated and contains security vulnerabilities, see https://www.npmjs.com/package/@xmldom/xmldom

## [0.9.0] - 2021-08-04

### Security

- Bump [xmldom](https://www.npmjs.com/package/xmldom) to v0.6.0

### Changed

- Update package-lock.json to v2
- Update dependencies

## [0.8.0] - 2021-05-13

### Changed

- Change images and MSS API call domain from www.bookingsuedtirol.com to easychannel.it
