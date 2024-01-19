# AdonisJS API Starter Kit

This repo contains an AdonisJS application tailored for building an API server that responds with JSON.

## What's included

- TypeScript setup with commands to run developments server using `ts-node + swc` and create production build.
- ESLint and Prettier setup extending the [AdonisJS tooling config](https://github.com/adonisjs/tooling-config) presets.
- Ace command line framework.
- Everything else you get with the core of AdonisJS.

On top of the framework core and dev-tooling, the following features are enabled by the API starter kit.

- Lucid ORM ( Installed, but not configured )
- Auth module ( Installed, but not configured )
- CORS
- VineJS for validations

## Usage

You can create a new app using the `api` boilerplate by executing the following command. The command will perform the following steps.

- Clone the repo
- Install dependencies
- Copy `.env.example` to `.env`
- Set app key using `node ace generate:key` command.
- Configure `@adonisjs/lucid` package.
- Install and configure `@adonisjs/session` package (if using auth session guard).
- Configure `@adonisjs/auth` package.

```sh
npm init adonisjs -- -K=api
```

### Configuring Lucid database dialect

By default, the `npm init adonisjs` command configures Lucid to use `sqlite`. However, you can define a custom database dialect as follows.

```sh
npm init adonisjs -- -K=api --db=postgres
```

Available options for the `--db` flag.

- sqlite
- postgres
- mysql
- mssql

### Configuring Auth package guard

By default, the `npm init adonisjs` command configures the Auth package to use `session` guard. However, you can define a custom auth guard as follows.

```sh
npm init adonisjs -- -K=api --auth-guard=access_tokens
```

Available options for the `--auth-guard` flag.

- session
- basic_auth
- access_tokens
