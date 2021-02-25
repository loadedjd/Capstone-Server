FROM node:14

RUN apt-get update || : && apt-get install python -y

COPY . /app

WORKDIR /app

EXPOSE 8080

RUN npm i
RUN npm run build

CMD ["npm", "run", "start:prod"]