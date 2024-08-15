FROM node:alpine

COPY . .
WORKDIR /my-app
RUN npm install --productio
EXPOSE 3000

CMD ["npm", "run", "start"]