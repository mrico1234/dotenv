import React, { useState, useEffect } from "react"
import SwitchBar from './SwitchBar'
import Search from './Search'
import SearchResults from './SearchResults'
import FetchSearch from '../libs/fetchSearch'
import Loader from './Loader'
import NoResults from './NoResults'

const LayoutSearch = () => {

  const [error, setError] = useState(false);
  const [switchbar, updateSwitchBar] = useState({ type: "3" })
  const [search, setSearchBar] = useState("")
  const [consult, saveConsult] = useState(false)
  const [results, saveResults] = useState([])
  const [page, savePage] = useState(0)
  const [loading, changeLoader] = useState(false)
  const [noresults, setNoResults] = useState(false)

  const changeSwitchBar = (event) => {
    updateSwitchBar({ type: event.target.value })
    setSearchBar("")
    saveResults([])
    setNoResults(false)
    changeSwitchBarPage(event.target.value)
  }

  const changeSearchBar = (event) => {
    setSearchBar(event.target.value)
    saveResults([])
    savePage(1)
    setNoResults(false)
  }

  // Permite incrementar la pagina (offset) cada vez q se hace scroll
  const increasePage = () => {
    return switchbar.type === "3" ? 20 : 1
  }

  // Cada vez que se switchea se reinicia el value de la pagina 
  const changeSwitchBarPage = (type) => {
    type === "3" ? savePage(0) : savePage(1)
  }

  // Almacena los resultados en el sessionStorage
  const setSessionStorage = () => {
    if ( results.length > 0 && (sessionStorage.getItem("companyData") === null || sessionStorage.getItem("processData") === null || sessionStorage.getItem("secopData") === null) ) {
      if (switchbar.type === "1" && sessionStorage.getItem("companyData") === null) {
        sessionStorage.setItem("companyData", JSON.stringify(results))
      } else if (switchbar.type === "2" && sessionStorage.getItem("processData") === null) {
        sessionStorage.setItem("processData", JSON.stringify(results))
      } else if (switchbar.type === "3" && sessionStorage.getItem("secopData") === null) {
        sessionStorage.setItem("secopData", JSON.stringify(results))
      }
    }
  }

  // Cada vez se switchea trae los resultados del sessionStorage para mostrarlos en las tarjetas
  const getSessionStorage = () => {
    if ( search === "" ) {
      let records;
      if (switchbar.type === "1" && sessionStorage.getItem("companyData") !== null) {
        records = JSON.parse(sessionStorage.getItem("companyData"))
      } else if (switchbar.type === "2" && sessionStorage.getItem("processData") !== null) {
        records = JSON.parse(sessionStorage.getItem("processData"))
      } else if (switchbar.type === "3" && sessionStorage.getItem("secopData") !== null) {
        records = JSON.parse(sessionStorage.getItem("secopData"))
      } else {
        saveConsult(true)
      }
      if (records) {
        savePage(page+increasePage())
        saveResults(records)
      } 
    }
  }

  // Por defecto ejecuta la consulta de la api de SECOP
  useEffect(() => {
    switchbar.type === "3" ? saveConsult(true) : saveConsult(false)
  }, [])

  useEffect(() => {
    // changeSwitchBarPage()
    getSessionStorage()
  }, [switchbar])

  // Consume la api de secop cuando se carga la pagina
  useEffect(() => {
    const consumeApi = async () => {
      if (consult) {
        page === 1 ? changeLoader(true) : changeLoader(false)
        try {
          let response = await FetchSearch(search, switchbar.type, page)
          response = switchbar.type === "2" ? response.processes : response
          response = response.length === 0 ? "" : response
          response ? setNoResults(false) : setNoResults(true)
          saveResults([...results, response])
          savePage(page+increasePage())
        } catch (error) {
          setError(true)
        }
        changeLoader(false)
        saveConsult(false)
      }
    }
    consumeApi()
  }, [consult])

  useEffect(() => {
    setSessionStorage()
    if (results.length >= 2) {
      let records
      records = results[1] ? results[0].concat(results[1]) : results[0]
      saveResults([records])
    }
  }, [results])

  return (
    <>
      <SwitchBar changeSwitchBar={changeSwitchBar} switchbar={switchbar} />
      {switchbar.type === "3" ? (
        ""
      ) : (
        <Search
          search={search}
          changeSearchBar={changeSearchBar}
          loading={loading}
          switchbar={switchbar}
          saveConsult={saveConsult}
        />
      )}
      <div className="container-results">
        <div className="one-row">
          {
            <p>Un total de <span className="number-results">{results[0] ? results[0].length : 0}</span> {switchbar.type === "1" ? "empresas" : "procesos"}</p>
          }
        </div>
        {loading ? <Loader /> : null}
        {results[0] ? (
          <SearchResults results={results} switchbar={switchbar} saveConsult={saveConsult}
          />
        ) : (
          search ? "" : <div className="results-container_result text-center"></div>
        )}
        <NoResults message="No hay resultados." noresults={noresults} results={results} />
      </div>
    </>
  )
}

export default LayoutSearch;