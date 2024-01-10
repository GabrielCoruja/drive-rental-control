FROM node:20.10.0-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]

