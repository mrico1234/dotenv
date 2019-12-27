import React from 'react'

export default (props) => {
  const proces = props.process
  const status=(s)=>{
    switch (s) {
      case 9:
        return 'Publicado'
      case 10:
        return 'Adjudicado'
      default:  
        return 'Cerrado'
    }
  }
  return(
    <div className="result-container">
			<img src={`http://107.170.25.142${proces.company.logo.url}`} alt={`logo ${proces.company.name}`}className="result-image" />
			<p className="result-title">ID PROCESO: {process.id}</p>
			<div className="result-container-text">
				<p className="result-text">{proces.description}</p>
				<p className="result-text">
					<span>Comprador: </span> {proces.company.name}
				</p>
				<p className="result-text">
					<span>Estado: </span> {status(proces.status)}
				</p>
				<p className="result-text">
					<span>Fecha inicio: </span> {proces.start_date}
				</p>
				<p className="result-text">
					<span>Fecha cierre: </span> {proces.end_date}
				</p>
				<p className="result-text">
					<span>Ciudad: </span> {proces.city.name + " - " + proces.city.department}
				</p>
			</div>
			<div className="result-buttons">
				<button className="result-button_add">Ver detalles</button>
			</div>
		</div>
  )
}

