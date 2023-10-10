# Backend

API for Rindus App

## Requirements

- Docker desktop
- Node ^18.XX.X (& npm)

## Installation

1. Install depencies and init environment

```shell
$ cp .env.example .env.development
$ cp .env.example .env.production
$ # Fill in correct secrets in .env.development and .env.production file
$ npm install
```

2. Init database (Complete steps of `seeds/README.md`)

```shell
$ docker compose up -d db adminer
$ npx knex migrate:up
$ npx knex seed:run
```

## Start project

```shell
$ docker compose --env-file .env.development up -d
```

### Debug

Attach to default port 9229

### TODO

- updated_at not working on Postgres
