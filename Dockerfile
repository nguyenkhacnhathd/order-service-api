# nhatnk/order-service-api:20210726
FROM node:14-buster-slim

RUN apt-get clean && apt-get update && apt-get install -yqq \
    curl \
    git unzip
ENV PATH="/var/app/web/node_modules/.bin/:${PATH}"
RUN npm i -g npm@6
RUN npm i -g @nestjs/cli
ENV HOME=/home/node
RUN chmod -R 777 /home/node