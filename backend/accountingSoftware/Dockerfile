FROM node:alpine
ENV PORT 5007

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./


RUN npm install

EXPOSE 5007

CMD ["npm","start"]
