FROM node:latest as build

RUN apt-get update && apt-get install -y  openssl 

WORKDIR /app/multi-tenant

COPY  package*.json ./
COPY  prisma ./prisma/
COPY  tsconfig*.json ./

RUN npm ci 
COPY . .

RUN npm run prisma:generate
FROM node:latest

WORKDIR /app/multi-tenant

COPY --from=build /app/multi-tenant .

RUN npm run build


EXPOSE 3000

CMD [  "npm", "run", "start:prod" ]

