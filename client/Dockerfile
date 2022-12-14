FROM node:16

LABEL description="React/Node/Express/Apollo/GraphQL App developed SpaceX_API"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]