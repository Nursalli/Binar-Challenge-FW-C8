## Setup

create a file named `config.json` in app/config folder (this file is required if you are want to run sequelize create database, migrations, etc). adjust the configuration by your own config.

Example:
```json
{
  "development": {
    "username": "username",
    "password": "pass",
    "database": "db_development",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "username",
    "password": "pass",
    "database": "db_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "username",
    "password": "pass",
    "database": "db_production",
    "host": "localhost",
    "dialect": "postgres"
  }
}
```

add `.env` in file with this kind of format:

```
DATABASE_NAME=try_sequelize
DATABASE_USERNAME=root
DATABASE_PASSWORD=somepw
DATABASE_HOST=localhost
DATABASE_TYPE=postgres
```

## How to run

```sh
$ npm install
$ npm run db:create
$ npm run db:migrate
$ npm run start
```
## API Documentation 
```
Access: (http://localhost:5000/doc)
```