import { GET_LAUNCHES } from '../graphql/queries';
import { useQuer, useLazyQuery } from '@apollo/client';

// query 10 more launches
let prevOffset = 0; 



export const fetch10More = () => {
    const [getLaunches, { data, error, loading }] = useQuery(GET_LAUNCHES, { manual:true,
        variables: { limit: 10, offset: prevOffset + 10, sort: "id"},
    });
    // prevOffset += 10;
    // console.log('10 more', data);
    // if (loading) {return <Spinner/>;}
    // if(error) {return <p>ERROR: {error.message}</p>};
}

// const fetch10More = () => {
  // const { data, error, loading } = useQuery(GET_LAUNCHES, { manual:true
    //   variables: { limit: 10, offset: prevOffset + 10, sort: "id"},
    // });
    // prevOffset += 10;
    // console.log('fetching 10 more launches');
  // }