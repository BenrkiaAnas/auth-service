# auth-service/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

# CMD ["npm", "start"] Development
# Production
CMD ["node", "server.js"] 

