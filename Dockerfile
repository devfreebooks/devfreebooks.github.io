FROM node:0.12.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
ONBUILD COPY package.json /usr/src/app/
ONBUILD COPY . /usr/src/app
ONBUILD RUN npm install grunt-cli -g


EXPOSE 3000
CMD [ "npm", "install"]
CMD [ "grunt", "serve" ]