import React from 'react';
import SourceData from "./SourceData"
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollComponent = ({ results, switchbar, inputEmpty, saveConsult }) => {

  const nextDataScrollInfinite = () => {
    saveConsult(true)
  }
  
  return ( 
    <InfiniteScroll
      dataLength={results[0].length}
      next={nextDataScrollInfinite}
      hasMore={true}
      scrollableTarget="scrollableDiv1"
    >
      {results[0].length > 0
        ? results[0].map(data => (
          <SourceData results={data} switchbar={switchbar} key={data.id} inputEmpty={inputEmpty} />
        ))
        : ""
      }
    </InfiniteScroll>
  );
}
 
export default InfiniteScrollComponent;
