FROM node:lts-alpine

WORKDIR APP

COPY . .

RUN npm i

EXPOSE 5000

CMD ["npm","start"]
