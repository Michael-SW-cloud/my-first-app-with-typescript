FROM node:20-alpine

COPY . .
WORKDIR /my-app
RUN npm install --production
EXPOSE 3000

CMD ["npm", "run", "start"]