FROM node:22-alpine

RUN apk update && \
    apk add poppler-utils

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]