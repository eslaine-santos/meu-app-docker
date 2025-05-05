FROM node:18

WORKDIR /app

COPY package.json ./
COPY app.js ./

RUN npm install

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
