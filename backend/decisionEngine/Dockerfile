FROM node:18-alpine
ENV PORT 5054

RUN mkdir -p /app/decision
WORKDIR /app/decision

COPY ./ /app/decision
RUN npm install

EXPOSE 5054

CMD ["npm", "start"]