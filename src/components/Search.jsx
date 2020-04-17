import React from 'react'
import logoSearch from '../assests/images/search.svg';

export default (props) => {
  return(
    <div className="container-Searching">
      <div className="Searching">
        <img src={logoSearch} alt="" className="Searching-logo" />
        <input name="searchValue" placeholder={props.type == 1? "Busca empresas aquí" : "Busca procesos aquí" } type="search" value={props.searchValue} onChange={props.handleInputChange} />
      </div>
      <button className="Searchin-button" disabled={props.loading} onClick={props.hadleClickbutton}>BUSCAR</button>
    </div>
  )
}