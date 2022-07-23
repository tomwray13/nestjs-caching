## About

This is a Github repo that uses the techniques described in [this detailed tutorial](https://tomray.dev/nestjs-caching-redis) on caching in NestJS with Redis.

## Set up locally

Install dependencies:

```
npm install
```

Create your own env file:

```
cp .env.example .env
```


Spin up local environment (hot reloading included):

```
# for nest app
npm run start:dev

# for redis cache
docker compose up
```
