import Spinner from './Spinner';

const QueryResult = ({loading, error, data, children}) => {
  if (error) { return <p>ERROR: {error.message}</p>;
  }
  if (loading) { return (<Spinner />);
  }
  if (!data) { return <p>Nothing to show...</p>;
  }
  if (data) { return children;
  }
};

export default QueryResult;

