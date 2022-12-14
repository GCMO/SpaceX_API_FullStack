FROM node:16

LABEL description="React/Node/Express/Apollo/GraphQL App developed SpaceX_API"

WORKDIR SpaceX_API_FullStack/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]