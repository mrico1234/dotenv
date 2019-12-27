import React, { Fragment } from 'react'
import logoSearch from '../assests/images/search.svg';

export default (props) => {
  return(
    <Fragment>
      <div className="container-Searching">
        <div className="Searching">
          <img src={logoSearch} alt="" className="Searching-logo" />
          <input name="searchValue" type="search" value={props.searchValue} onChange={props.handleInputChange} />
        </div>
        <div className="Searching2">
          <select name="type" value={props.selectValue} onChange={props.handleInputChange}>
            <option value="1"> Empresa </option>
            <option value="2"> Proceso </option>
          </select>
        </div>
        <button className="Searchin-button" disabled={props.loading} onClick={props.hadleClickbutton}>BUSCAR</button>
      </div>
      <p className="Searching-P">Busca por palabra clave y elija según el tipo: empresa o proceso</p>
    </Fragment>
  )
}