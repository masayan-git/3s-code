FROM node:16-bullseye-slim

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080

ENV API_KEY ${API_KEY}
ENV SERVICE_DOMAIN ${SERVICE_DOMAIN}
ENV HOST=0.0.0.0
ENV PORT=8080

RUN npm run build

CMD [ "npm", "run", "start" ]