<p align="center">
  NESTGQL
</p>

## Description

Unified API providing both REST and Graphql endpoints.

<!-- <img src="https://nestjs.com/img/logo_text.svg" height="20" alt="Nest Logo" /> -->

- NestJs
- GraphQL
- Typeorm
- Sqlite
- Typescript

This is a work in progress.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Running the app for the first time will create appdb.db file in the root directry of the project with 2 entities, Recipe and Sample.

- SampleEntity is just a test entity
- Recipe entity is basic recipe model with a few properties [`title`, `description`, `ingredients`, `instructions`] etc.

## Test

Not fully Implemented yet.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Gagan](https://github.com/devtools_0x01)

## License

Nest is [MIT licensed](LICENSE).
