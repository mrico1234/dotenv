import React from "react"
import Company from "./Company"
import Process from "./Process"
import Secop from "./Secop"

const SourceData = ({ results, switchbar, inputEmpty }) => {
  if (switchbar.type === "1") {
    return (<Company company={results} key={results.id} inputEmpty={inputEmpty} />)
  } else if (switchbar.type === "2") {
    return (<Process process={results} key={results.id} inputEmpty={inputEmpty} />)
  } else if (switchbar.type === "3") {
    return (<Secop process={results} key={results.id} inputEmpty={inputEmpty} />)
  }
}

export default SourceData