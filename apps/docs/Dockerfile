FROM node:21-alpine3.19 as base

RUN apk add git

ENV FORCE_COLOR=0
RUN corepack enable

RUN yarn global add turbo

FROM base as prune

WORKDIR /usr/src/app/

COPY . .

RUN turbo prune docs --docker 

FROM base as installer

WORKDIR /usr/src/app/

COPY --from=prune /usr/src/app/out/json/ .

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile 

COPY --from=prune /usr/src/app/out/full/ .

FROM base as builder 

WORKDIR /usr/src/app/

COPY --from=installer /usr/src/app .

RUN yarn turbo build --filter=docs


FROM base as runner 

COPY --from=builder /usr/src/app/node_modules/ ./node_modules
COPY --from=builder /usr/src/app/apps/docs/ .

CMD [ "yarn", "serve", "--host", "0.0.0.0", "--no-open" ]