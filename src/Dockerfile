FROM node:22-alpine3.19

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
