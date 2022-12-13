// import React, { useState } from 'react';
// import {useQuery} from '@apollo/client';
// import {GET_FAVLAUNCHES} from '../graphql/queries';
// import Spinner from './Spinner';

const FavDetailList = ({ selectedLaunch }) => {
    
    // const {data, error, loading} = useQuery(GET_FAVLAUNCHES, {
    //     variables: {id: user.id },
    // });
    const launchFavDetails = selectedLaunch;
    console.log('SX_DATA', selectedLaunch );
    
    // if (loading) {return <Spinner/>;}
    // if(error) {return <p>ERROR: {error.message}</p>};
  
    return (
      <div >
        {launchFavDetails && (
          <>
            <ul>
              <li><strong>Mission Name: </strong> {launchFavDetails.mission_name}</li>
              <li><strong>Rocket Name: </strong>{launchFavDetails.rocket}</li>
              <li><strong>Year: </strong>{launchFavDetails.launch_year}</li>
              <li><strong>Launch Site: </strong>{launchFavDetails.launch_site}</li>
              <li><strong>Details: </strong> {launchFavDetails.details}</li>
            </ul>
            <img className='rocketImg' alt='' src={launchFavDetails.links}></img> 
          </>
        )}
      </div>
    );
};

export default FavDetailList;
