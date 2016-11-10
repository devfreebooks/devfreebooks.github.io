FROM node:0.12.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
COPY . /usr/src/app
RUN npm install grunt-cli -g
RUN npm install

EXPOSE 3000
CMD [ "grunt", "serve"]
