import { gql } from "@apollo/client";

// get all launches from SpaceX API
export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int) {
    launches(sort: "launch_date_local", limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
    }
  }
`;

// get a single launch details from SpaceX API
export const GET_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      details
      id
      launch_site {
        site_name_long
      }
      launch_year
      mission_name
      launch_date_local
      links {
        flickr_images
      }
      rocket {
        rocket {
          name
        }
      }
    }
  }
`;

// get favorite launch from Server 'IN Memory'
export const GET_FAVLAUNCHES = gql`
  query Likes {
    likes {
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
