FROM node:21-alpine3.19 as base
RUN yarn global install turbo

FROM base as installer 

COPY . .

RUN turbo prune docs 
