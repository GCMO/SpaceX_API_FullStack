
export const resolvers = {
    Query: {
        likes: () => liked,
    },
    Mutation: {
        
};

// dummy data
const liked = [
    {
        id: 1,
        mission_name: 'FalconSat',
    },
    {
        id: 2,
        mission_name: 'DemoSat',
    },
];

