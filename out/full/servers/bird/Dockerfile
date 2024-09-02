# syntax = docker/dockerfile:1.2

FROM node:18-alpine as base 

RUN apk upgrade

RUN yarn global add turbo

FROM base as builder

WORKDIR /usr/src/app

COPY . .

RUN  turbo prune bird --docker

FROM base as installer

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/out/json/ .
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

COPY --from=builder /usr/src/app/out/full/ .
RUN yarn turbo run build --filter=bird

RUN ls -a node_modules

CMD node servers/bird/dist/index.cjs
