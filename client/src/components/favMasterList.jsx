import React, { useState, useEffect } from 'react';
import { FaRocket, FaHeart } from 'react-icons/fa';
//Apollo
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/queries';
//Components
import DetailList from './DetailList';
import Spinner from './Spinner';

const MasterList = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [next10Launches, setNext10Launches] = useState(0);
  

  const onClick = (e) => {
    e.preventDefault();
    setNext10Launches(next10Launches+10);
  }
  
  const {data, error, loading} = useQuery(GET_LAUNCHES, {
    variables: { limit: 10, offset: next10Launches },
  });

  // console.log('first10', data?.launches);
  // console.log(data?.launches[0].mission_name);  


  if (loading) {return <Spinner/>;}
  if(error) {return <p>ERROR: {error.message}</p>};

    
    const favLaunch = async () => {
      //  data.launches.id
      console.log('favouriting launch');
    }
        
  return (
    <div className='d-flex justify-content-left p-5 ' >
      
      <div className='spaceXLaunches'>
        <h4>SPACEX LAUNCHES</h4>
        <hr/>
        <ul>
          {data?.launches.map(u => (
            <li key={u.id} onClick={() => setSelectedLaunch(u)}>{u.id}-{u.mission_name}</li>
            ))}
        </ul>
        <button 
          className='btn btn-secondary btn-sm m-3' onClick={onClick}>
            <FaRocket /> LOAD MORE LAUNCHES
        </button>
      </div>
     
      <div className='LaunchDetails'>
        <div className='d-flex justify-content-between'>
          <h4>LAUNCH DETAILS</h4>
          <button 
            className='btn btn-danger btn-sm p-1' 
            onClick={favLaunch}>
            <FaHeart size='14px' />  LIKE
          </button>
        </div>
        <hr/>
        {selectedLaunch ? 
          <DetailList user={selectedLaunch} />
          : <h4> ⬅ Select a launch</h4>}
      </div>

    </div>
  )
};

export default MasterList;
