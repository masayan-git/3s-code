FROM node:16-bullseye-slim

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV HOST=0.0.0.0

RUN npm run build

CMD [ "npm", "run", "start" ]