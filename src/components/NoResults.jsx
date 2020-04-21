import React from 'react'

const NoResults = ({ message }) => {
  return ( 
    <div className="results-container_result text-center">
      <h4>{message}</h4>
    </div>
   );
}
 
export default NoResults;