import React, { useState } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
//Apollo
import { useQuery, useMutation } from '@apollo/client';
import { GET_FAVLAUNCHES } from '../graphql/queries';
import { DELETE_LAUNCH } from '../graphql/mutations';
//Components
import { localClient } from '../ApolloClients';
import FavDetailList from './FavDetailList';
import Spinner from './Spinner';

const FavMasterList = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  
  const [mutateFunction] = useMutation(DELETE_LAUNCH, {
    client: localClient,
  });

  const {data, error, loading} = useQuery(GET_FAVLAUNCHES);
  
  // Delete launch favorited from server
  const deleteFavLaunch = async (e) => {
      e.preventDefault();
      mutateFunction({
        variables: {
          id: selectedLaunch.id }
          });
          window.location.reload(false)
      console.log('favouriting launch' );
    }

  if (loading) {return <Spinner/>;}
  if(error) {return <p>ERROR: {error.message}</p>};
  
        
  return (
    <div className='d-flex justify-content-left p-5 ' >
      
      <div className='spaceXLaunches'>
        <h4> <FaHeart color='red' size='20px' /> LAUNCHES</h4>
        <hr/>
        <ul>
          {data?.likes.map(u => (
            <li key={u.id} onClick={() => setSelectedLaunch(u)}>{u.id} - {u.mission_name}</li>
            ))}
        </ul>
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
          <FavDetailList selectedLaunch={selectedLaunch} />
          : <h4> ⬅ Select a launch</h4>}
      </div>

    </div>
  )
};

export default FavMasterList;
