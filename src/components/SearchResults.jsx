import React from 'react'
import InfiniteScrollComponent from './InfiniteScrollComponent'

export default ({ results, page, switchbar, saveConsult }) => {
  
  const inputEmpty = (value) => {
    if (!value || value === "ND") {
      return "Sin información"
    } else if (value) {
      return value
    }
  }

  return (
    <div id="scrollableDiv1" className="results-container_result">
      <InfiniteScrollComponent results={results} page={page} switchbar={switchbar} inputEmpty={inputEmpty} saveConsult={saveConsult} />
    </div>
  )

}