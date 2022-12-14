// import React, { useState } from 'react';
import {useQuery} from '@apollo/client';
import { SAVED_LAUNCH} from '../graphql/mutations';
import {GET_LAUNCH} from '../graphql/queries';
import Spinner from './Spinner';
import { FaHeart } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { localClient } from "../ApolloClients";


const DetailList = ({ user }) => {
    
  const [mutateFunction] = useMutation(SAVED_LAUNCH, {
    client: localClient,
  });

    const {data, error, loading} = useQuery(GET_LAUNCH, {
        variables: {id: user.id },
    });
    const launchDetails = data?.launch;
    console.log('SX_DATA', data?.launch );
    
    const favLaunch = async () => {
      console.log("favouriting launch", launchDetails);
      mutateFunction({
        variables: {
          id: launchDetails.id,
          mission_name: launchDetails.mission_name,
          launch_year: launchDetails.launch_year,
          launch_date_local: launchDetails.launch_date_local,
          launch_site: launchDetails.launch_site.site_name_long,
          rocket: launchDetails.rocket.rocket.name,
          details: launchDetails.details,
          links: launchDetails.links.flickr_images[0],
        },
      });
    };

    if (loading) {return <Spinner/>;}
    if(error) {return <p>ERROR: {error.message}</p>};
  
    return (
      <div >
        <div className="d-flex justify-content-between">
          <h4>LAUNCH DETAILS</h4>
          <button className="btn btn-danger p-1" onClick={favLaunch}>
            {launchDetails?.isFavourite ? (
              <FaHeart size="14px" color="red">LIKE</FaHeart>
            ) : (
              <FaHeart size="14px">LIKE</FaHeart>
            )}
          </button>
        </div>
        <hr />
        {launchDetails && (
          <>
            <ul>
              <li><strong>Mission Name: </strong> {launchDetails.mission_name}</li>
              <li><strong>Rocket Name: </strong>{launchDetails.rocket.rocket.name}</li>
              <li><strong>Year: </strong>{launchDetails.launch_year}</li>
              <li><strong>Launch Site: </strong>{launchDetails.launch_site.site_name_long}</li>
              <li><strong>Details: </strong> {launchDetails.details}</li>
            </ul>
            <img className='rocketImg' alt='' src={launchDetails.links.flickr_images}></img> 
          </>
        )}
      </div>
    );
};

export default DetailList;






// DISCARD
// const [launchDetails, setLaunchDetails] = useState(null);

// const {data, error, loading} = useQuery(GET_LAUNCHES, {
//     variables: { limit: 10, offset: 0, sort: "id" },
//   });
//   console.log(data?.launches[0].mission_name); 

// useEffect(() => {
//   (async () => {
//     const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`);
//     const json = await resp.json();
//     setLaunchDetails(json);
//   })();
// }, [user]);