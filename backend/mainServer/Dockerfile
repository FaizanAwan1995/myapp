FROM node:alpine
ENV PORT 5069

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./


RUN npm install

EXPOSE 5069

CMD ["node","index.js"]