import React from 'react'
import '../assests/styles/components/loader.scss'

export default (props) => {
  return(
    <div className="center">
      <div className="lds-dual-ring big-top-space"></div>
      <div className="text-center top-space">Cargando...</div>
    </div>
  )
}