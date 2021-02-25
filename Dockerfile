FROM node:14

RUN apt-get update || : && apt-get install python -y

COPY . /app

WORKDIR /app

RUN npm i
RUN npm run build

CMD ["npm", "run", "start:prod"]