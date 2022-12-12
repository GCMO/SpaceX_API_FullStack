import gql from 'graphql-tag';

// Save a launch IN Memory
export const SAVED_LAUNCH = gql`
    mutation SaveLaunch($id: ID!) {
        savedLaunch(id: $id) @client
            id
        }
    `;

// export const SAVED_LAUNCH = gql`
//     mutation SaveLaunch($id: ID!, $details: String, $launch_site: String, $launch_year: String, $mission_name: String, $launch_date_local: String, $flickr_images: String, $rocket_name: String) {
//         saveLaunch(id: $id, details: $details, launch_site: $launch_site, launch_year: $launch_year, mission_name: $mission_name, launch_date_local: $launch_date_local, flickr_images: $flickr_images, rocket_name: $rocket_name) @client
//         savedLaunch(id: $id) @client
//             id
//         }
//     `;

    
// Delete a launch
export const DELETE_LAUNCH = gql`
    mutation DeleteLaunch($id: ID!) {
        deleteLaunch(id: $id) {
            id
        }
    }`

