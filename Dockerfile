FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]

