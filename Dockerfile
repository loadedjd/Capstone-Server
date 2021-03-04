FROM node:14

RUN apt-get update || : && apt-get install python -y
RUN apt-get install python-pip -y

COPY . /app

WORKDIR /app


RUN npm i
RUN npm run build
RUN pip install -r requirements.txt

CMD ["npm", "run", "start:dev"]