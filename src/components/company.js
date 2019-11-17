import React from "react"


export default (props) => (
  <li>
    <h4>{ props.company.name }</h4>
    <a href={props.company.email} target="_blank" rel="noopener noreferrer"> Ir a empresa</a>
  </li>
)