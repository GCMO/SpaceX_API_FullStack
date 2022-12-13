import gql from "graphql-tag";


export const SAVED_LAUNCH = gql`
  mutation SavedLaunch(
    $id: ID!
    $mission_name: String!
    $launch_date_local: String
    $launch_year: String
    $details: String
    $links: String
    $rocket: String
    $launch_site: String
  ) {
    savedLaunch(
      id: $id
      mission_name: $mission_name
      launch_date_local: $launch_date_local
      launch_year: $launch_year
      details: $details
      links: $links
      rocket: $rocket
      launch_site: $launch_site
    ) {
        id
        mission_name
        launch_date_local
        launch_year
        details
        links
        rocket
        launch_site
    }
  }
`;

// Delete a saved launch from in Server Memory
export const DELETE_LAUNCH = gql`
  mutation DeleteLaunch($id: ID!) {
    deleteLaunch(id: $id) {
      id
    }
  }
`;
