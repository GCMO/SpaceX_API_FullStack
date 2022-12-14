FROM node:16

LABEL description="React/Node/Express/Apollo/GraphQL App developed SpaceX_API"

WORKDIR SpaceX_API_FullStack/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]