import gql from 'graphql-tag';

// Save a launch IN Memory
export const SAVED_LAUNCH = gql`
    mutation SaveLaunch($id: ID!) {
        savedLaunch(id: $id) @client
            id
            mission_name
        }
    `;

    
// Delete a launch
export const DELETE_LAUNCH = gql`
    mutation DeleteLaunch($id: ID!) {
        deleteLaunch(id: $id) {
            id
        }
    }`

