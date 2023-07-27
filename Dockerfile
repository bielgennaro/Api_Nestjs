FROM node:latest

RUN npm install -g @nestjs/cli
RUN npm install -g npm@9.8.1

USER node

WORKDIR /home/node/app