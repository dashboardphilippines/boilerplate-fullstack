FROM node:14-alpine

RUN apk --no-cache add tini

WORKDIR /usr/src/app

COPY . .
RUN npm install && npm run build && npm prune --production

EXPOSE 8080
ENV PORT=8080
ENV NODE_ENV=production
ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "./dist/index.js" ]
