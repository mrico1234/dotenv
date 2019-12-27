import React from 'react'
import Company from './Company'
import Process from './Process'
import Loader from './Loader'

export default (props) => {
  if (props.loading){
    return(
      <Loader />
    )
  }
  
  if (props.type === '1'){
    return(
      <div className="results-container_result">
        { 
          props.data.map((company) =>{
            return <Company company={company} key={company.id} />
          })
        }      
      </div>
    )
  }else{
    return(
      <div className="results-container_result">
        { props.data.processes ?
            props.data.processes.map((process) =>{
              return <Process process={process} key={process.id}/>
            })
          : ''
        }
      </div>
    )
  }
}