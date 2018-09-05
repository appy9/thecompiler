FROM mhart/alpine-node:10 as base
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm ci
COPY . .
RUN npm run build && \
    npm prune --production

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
EXPOSE 8080
CMD ["node", "server"]
