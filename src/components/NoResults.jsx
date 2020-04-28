import React from 'react'

const NoResults = ({ message, noresults, results }) => {

  if ((noresults === true && results[0]) || noresults === false) return null

  return ( 
    <div className="results-container_result text-center">
      <h4>{message}</h4>
    </div>
  );
}

export default NoResults;