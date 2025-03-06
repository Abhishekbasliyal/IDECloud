FROM node:16-alpine

RUN apk add --no-cache \
    python3 \
    py3-pip \
    make \
    g++ \
    bash

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["node", "index.js"]
