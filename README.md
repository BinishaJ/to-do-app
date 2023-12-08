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
### .env file
```

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

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/aaaecc70-8b2d-4943-9bb2-a4977540872c)

### Duplicate email

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/87dcf6f5-5588-48cd-a1af-df5c52cf6644)

</details>

<details>
  <summary>User Login</summary>

### Correct Password

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/b7d72ee8-0d7f-48ef-8cc1-23a4078fe99b)

### Incorrect Password

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/0848d4a4-f87a-4b1b-8a34-56bf19f9fc45)

</details>

<details>
  <summary>Get List of users / Delete</summary>

### Normal User

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/0c4f9596-535c-4697-8630-b7402f0620de)

### Admin

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/781d052a-62dd-4c20-991e-f524ffddd754)

</details>

<details>
  <summary>Create new todo</summary>

### Creates new todo for the user by extracting user id from the JWT token in header

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/44204a49-5f5a-4c83-8c8b-680df0c1d4b2)

</details>

<details>
  <summary>Uncompleted todos</summary>

### List of uncompleted todos for the user by extracting user id from the JWT token in header

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/8381aaf2-6094-4dc2-9c85-7346d9c23a6a)

</details>

<details>
  <summary>Complete the todo</summary>

### Unauthorized if another user tries to mark the todo as complete

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/dad7d976-cd19-4ed8-a335-a82c740b3b50)

### Mark the todo complete

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/bdabd2aa-9062-4835-8953-9b214eaa40cf)

</details>

<details>
  <summary>Completed todos</summary>

### List of completed todos for the user by extracting user id from the JWT token in header

![image](https://github.com/BinishaJ/to-do-app/assets/69308583/3f434e07-1724-41f2-94ac-f0dce31a9200)

</details>

<details>
  <summary>Delete todo</summary>
  
  ### Unauthorized if another user tries to delete the todo
  
![image](https://github.com/BinishaJ/to-do-app/assets/69308583/8aeb463b-cf8a-4d1e-a96e-041a7a0bc9b7)

  ### Delete todo
  
![image](https://github.com/BinishaJ/to-do-app/assets/69308583/487517bc-a053-4ff7-93c4-396ad9888c7f)

</details>
