<p align="center">
  NESTGQL
</p>

## Description

Unified API providing both REST and Graphql endpoints. This project can be used as a starter for another project.

<!-- <img src="https://nestjs.com/img/logo_text.svg" height="20" alt="Nest Logo" /> -->

- NestJs - Core framework
- GraphQL - Using @nestjs/graphql
- Typeorm
- Sqlite - can be switched to Postgres, Mysql etc
- Typescript

NOTE: This project is currently a work in progress.

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
#OR
$ npm run dev

# production mode
$ npm run start:prod
```

Running the app for the first time will create appdb.db file in the root directry of the project with following typeorm entities:

- Recipe (a cooking recipe, can be any recipe in fact, e.g. a how to, etc.)
- Project (a project entity, for example, a project in development.)
- Bug (Bugs related to a project in Project entity.)
- Sample (this is just a test entity. Can be renamed to note for the Bug entity.)

- Sample entity only exists to make test CRUD operations to check everything is working.

- Recipe entity is basic recipe model with a few properties [`title`, `description`, `ingredients`, `instructions`] etc.

Both Typeorm and Graphql have been configured and set up in app.module.ts file. Further config is done in each module as needed.

## TODOs

- add more validation where needed
- add authentication for mutations
- add missing POST, PUT and DELETE endpoints to controllers.
- optimize sql usage, add dataloader etc.
- may be reorgnize service classes to remove depency on Typeorm repositories

## Test

To be done.

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
