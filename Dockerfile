# stage 2
FROM node:16.15.1-alpine
WORKDIR /app
COPY . /app
RUN npm install


