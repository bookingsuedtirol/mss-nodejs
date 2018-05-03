FROM node:8-alpine

RUN apk --update add --no-cache \
  g++ \
  python \
  bash \
  make

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

# EXPOSE 8080

# CMD ["npm", "run", "dev"]
