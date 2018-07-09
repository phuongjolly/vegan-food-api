FROM node:carbon

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

EXPOSE 8080
COPY . .

CMD [ "npm", "start" ]