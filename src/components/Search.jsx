import React from 'react'
import logoSearch from '../assests/images/search.svg';

export default ({ search, changeSearchBar, loading, switchbar, saveConsult }) => {

  const handleClick = () => {
    search.length > 4 ? saveConsult(true) : saveConsult(false)
  }

  return(
    <div className="container-Searching">
      <div className="Searching">
        <img src={logoSearch} alt="" className="Searching-logo" />
        <input name="searchValue" placeholder={switchbar.type === "1"? "Busca empresas aquí" : "Busca procesos aquí" } type="search" value={search} onChange={changeSearchBar} />
      </div>
      <button className="Searchin-button" disabled={loading} onClick={handleClick}>BUSCAR</button>
    </div>
  )
}