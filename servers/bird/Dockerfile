# syntax = docker/dockerfile:1.2

FROM node:18-alpine as base 


RUN apk upgrade

FROM base as installer

WORKDIR /usr/src/app/

COPY servers/bird/package.json .
COPY .npmrc .

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile

COPY servers/bird .

FROM base as builder

WORKDIR /usr/src/app

COPY --from=installer /usr/src/app .

RUN yarn build

CMD npx tsx dist/index.cjs
