FROM node:16-bullseye-slim

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

RUN npm run build

CMD [ "npm", "run", "start" ]