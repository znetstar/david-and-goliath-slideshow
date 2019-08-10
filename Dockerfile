FROM node:10

WORKDIR /app

VOLUME /data

ADD ./package.json /app/package.json

RUN npm install

ADD . /app

RUN npm run dist

ENV PORT 80

EXPOSE 80

CMD npm start