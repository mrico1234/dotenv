import React, { useEffect, useState } from "react"
import Company from "./company"
import fetchSearch from "../libs/fetchSearch";

export default () => {
  const [results, SetResults] = useState([]);

  useEffect(async ()=> {
    let searchResults = await fetchSearch();
    SetResults(searchResults);
  },[])
  if (results){
    return (
      <ul>
        { 
          results.map((company) =>{
            return <Company company={company} key={company.id} />
          })
        }
      </ul>
    )
  }else{
    return(
      <div>No hay data</div>
    )
  }
  
  

}
  
