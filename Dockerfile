FROM node:14

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=8080

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

RUN ls .
EXPOSE 8080
CMD [ "node", "./dist/index.js" ]
