Using SpaceX GraphQL API https://api.spacex.land/graphql/ presented the data on a master-detail-view page. 

FRONT-END: ReactJS, Bootstrap and CSS (via CDN see index.html ) Apollo, GraphQL 
BACK-END: Node, Express, GraphQL, Apollo 
DOCKER: The app is fully dockerized just run: 

--> docker-compose up -d

--> open the browser at http://localhost:3000


OBJECTIVE: 

An exciting assignment during an recruitment process. Very tight deadline, had to be delivered in 2 days.

ARCHITECTURE:

So the main architecture of the project required a 2 step process:

1- Fetch the data from the SpaceX offiicial API
1.1- Display the data on a master-detail-view page
1.2- Allow user to save & delete favorite launches

2- Save the liked data in server memory
2.1- Display the saved data in a separate page in the client

LEARNING CURVE:
1- the application is fetching both from the SpaceX API and the local server memory via GraphQL and Apollo. So had to find a solution for React client. After some research, found out that I can use Apollo Client to fetch data from both sources. So removed the client from app.js and in the src folder create ApolloClient.js with the following splitter code:

export const spaceXClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.spacex.land/graphql"
  });

// For fetcing to localhost
export const localClient = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });  

2- GraphQL is pretty amazing, specially on the front-end. However, setting up the server was quite challenging. The queries and mutations must match with the schema, the resolvers and work coherently with the Client. So had to spend some time on that. Kept schema, resolvers and server all in one file to make it visually more understandable (but eventually will need to refactor it).

3- App Dockerization for fast and straightforward. Just created a very similar Dockerfile for both client and server. And then merged them with a docker-compose.yml in the root folder.