<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Todo Application using NestJS</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Todo Application using NestJS, PostgreSQL with User Authentication and JWT Authentication and Swagger Docs

## Environment Variables

```
.env file

DATABASE_HOST
DATABASE_PORT
DATABASE_USERNANE
DATABASE_PASSWORD
DATABASE_NAME

JWT_KEY
JWT_EXPIRE

PORT
```

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

## Test

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

# Screenshots

<details>
  <summary>User Signup</summary>

![Alt text](image.png)

### Duplicate email

![Alt text](image-15.png)

</details>

<details>
  <summary>User Login</summary>

### Correct Password

![Alt text](image-1.png)

### Incorrect Password

![Alt text](image-2.png)

</details>

<details>
  <summary>Get List of users / Delete</summary>

### Normal User

![Alt text](image-5.png)

### Admin

![Alt text](image-6.png)

</details>

<details>
  <summary>Create new todo</summary>

### Creates new todo for the user by extracting user id from the JWT token in header

![Alt text](image-7.png)

</details>

<details>
  <summary>Uncompleted todos</summary>

### List of uncompleted todos for the user by extracting user id from the JWT token in header

![Alt text](image-8.png)

</details>

<details>
  <summary>Complete the todo</summary>

### Unauthorized if another user tries to mark the todo as complete

![Alt text](image-9.png)

### Mark the todo complete

![Alt text](image-10.png)

</details>

<details>
  <summary>Completed todos</summary>

### List of completed todos for the user by extracting user id from the JWT token in header

![Alt text](image-12.png)

</details>

<details>
  <summary>Delete todo</summary>
  
  ### Unauthorized if another user tries to delete the todo
  ![Alt text](image-13.png)
  ### Delete todo
  ![Alt text](image-14.png)
</details>
