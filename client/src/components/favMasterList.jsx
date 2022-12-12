import React, { useState } from 'react';
import { FaRocket, FaHeart, FaTrash } from 'react-icons/fa';
//Apollo
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/queries';
//Components
import DetailList from './DetailList';
import Spinner from './Spinner';

const FavMasterList = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [next10Launches, setNext10Launches] = useState(0);
  

  const onClick = (e) => {
    e.preventDefault();
    setNext10Launches(next10Launches+10);
  }
  
  const {data, error, loading} = useQuery(GET_LAUNCHES, {
    variables: { limit: 10, offset: next10Launches },
  });

  const deleteFavLaunch = async () => {
    console.log('favouriting launch');
  }

  if (loading) {return <Spinner/>;}
  if(error) {return <p>ERROR: {error.message}</p>};
  
        
  return (
    <div className='d-flex justify-content-left p-5 ' >
      
      <div className='spaceXLaunches'>
        <h4> <FaHeart color='red' size='20px' /> LAUNCHES</h4>
        <hr/>
        <ul>
          {data?.launches.map(u => (
            <li key={u.id} onClick={() => setSelectedLaunch(u)}>{u.id} - {u.mission_name}</li>
            ))}
        </ul>
        <button 
          className='btn btn-secondary btn-sm m-3' onClick={onClick}>
            <FaRocket /> MORE FAVORITES
        </button>
      </div>
     
      <div className='LaunchDetails'>
        <div className='d-flex justify-content-between' >
          <h4> <FaHeart color='red' size='20px' className='m-1'/>LAUNCH DETAILS</h4>
          <button 
            className='btn btn-danger p-1' 
            onClick={deleteFavLaunch}>
            <FaTrash size='14px' /> DELETE
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

export default FavMasterList;
