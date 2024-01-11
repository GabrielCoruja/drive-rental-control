FROM node:18.19.0-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]

