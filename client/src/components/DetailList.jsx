// import React, { useState } from 'react';
import {useQuery} from '@apollo/client';
import {GET_LAUNCH} from '../graphql/queries';
import Spinner from './Spinner';

const DetailList = ({ user }) => {
    
    const {data, error, loading} = useQuery(GET_LAUNCH, {
        variables: {id: user.id },
    });
    const launchDetails = data?.launch;
    console.log('SX_DATA', data?.launch );
    
    if (loading) {return <Spinner/>;}
    if(error) {return <p>ERROR: {error.message}</p>};
  
    return (
      <div >
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
export default DetailList;