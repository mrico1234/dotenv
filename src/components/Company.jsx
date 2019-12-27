import React from "react"

export default (props) => {
  const {company} = props
  
  const companyType=(type)=>{
    switch (type) {
      case 1:
        return ['Comprador', 'buyer']
      case 2:
        return ['Proveedor', 'provider']
      default:  
        return ['Dual', 'dual']   
    }
  }
  
  return(
    <div className="result-container">
      <img src={`http://107.170.25.142${company.logo.url}`} alt={`logo ${company.name}`} className="result-image" />
      <p className="result-title">{company.name}</p>
      <div className="result-container-text">
        <p className={`result-type ${companyType(company.type_user_companies)[1]}`}>{companyType(company.type_user_companies)[0]}</p>
        <p className="result-text">
          <span>Sector empresarial:</span> {company.business_sector.name}
        </p>
        <p className="result-text">
          <span>Descripción:</span> {company.description}
        </p>
        <p className="result-text">
          <span>Ciudad:</span> {company.city.name + " - " + company.city.department.name}
        </p>
      </div>

      <div className="result-buttons">
        <button className="result-button_add">Contactar</button>
      </div>
    </div>
    )
}