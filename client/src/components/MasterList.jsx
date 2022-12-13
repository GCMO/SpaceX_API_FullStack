import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
//Apollo
import { useQuery, useMutation } from "@apollo/client";
import { GET_LAUNCHES } from "../graphql/queries";
import { SAVED_LAUNCH } from "../graphql/mutations";
//Components
import DetailList from "./DetailList";
import Spinner from "./Spinner";
import { localClient } from "../ApolloClients";

const MasterList = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [next10Launches, setNext10Launches] = useState(0);

  const [mutateFunction] = useMutation(SAVED_LAUNCH, {
    client: localClient,
  });

  const onClick = (e) => {
    e.preventDefault();
    setNext10Launches(next10Launches + 10);
  };
  // Apollo query from SpaceX API
  const { data, error, loading } = useQuery(GET_LAUNCHES, {
    variables: { limit: 10, offset: next10Launches },
  });

  // console.log('first10', data?.launches);
  // console.log(data?.launches[0].mission_name);

  // send favLaunch to server with mutation
  // const favLaunch = async () => {
  //   console.log("favouriting launch", selectedLaunch);
  //   mutateFunction({
  //     variables: {
  //       id: selectedLaunch.id,
  //       mission_name: selectedLaunch.mission_name,
  //       launch_date_local: selectedLaunch.launch_date_local,
  //       // launch_site: selectedLaunch.launch_site.site_name_long,
  //       rocket: selectedLaunch.rocket.rocket.name,
  //       details: selectedLaunch.details,
  //       links: selectedLaunch.links.flickr_images[0],
  //     },
  //   });
  // };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <div className="d-flex justify-content-left p-5 ">
      <div className="spaceXLaunches">
        <h4>SPACEX LAUNCHES</h4>
        <hr />
        <ul>
          {data?.launches.map((u) => (
            <li key={u.id} onClick={() => setSelectedLaunch(u)}>
              {u.id} - {u.mission_name}
            </li>
          ))}
        </ul>
        <button className="btn btn-secondary btn-sm m-3" onClick={onClick}>
          <FaRocket /> LOAD MORE LAUNCHES
        </button>
      </div>

      <div className="LaunchDetails">
        {selectedLaunch ? (
          <DetailList user={selectedLaunch} />
        ) : (
          <h4> ⬅ Select a launch</h4>
        )}
      </div>
    </div>
  );
};

export default MasterList;
