import React, { useState } from 'react';
import { Form, Row, Col,  Accordion, Button} from 'react-bootstrap'
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react"

export default (props) => {
  const { company } = props
  
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

  const [statusBtn, setStatus] = useState({
    bgColor: "#53d765", name: "VER MÁS"
  })
  const [expand, setExpand] = useState(false)
  
  const toggle = () => {
    if (statusBtn.name === "VER MÁS") {
      expandInputs(1)
      setStatus({
        bgColor: "#6b6b6b85", name: "VER MENOS",
      })
    } else {
      expandInputs(2)
      setStatus({
        bgColor: "#53d765", name: "VER MÁS",
      })
    }
  }

  const expandInputs = (value) => {
    if (value === 1) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }

  return(
    <div className="result-container">
      <Row>
        <Col sm="3" className="info-image">
          <img src={`https://testing.handelbay.com${company.logo.url}`} alt={`logo ${company.name}`} className="result-image" />
        </Col>
        <Col sm="9" className="fields">
          <Form.Label column sm="12" className="business-name">{props.inputEmpty(company.name)}</Form.Label>
          <Form.Label column sm="12" className="business-profile">{props.inputEmpty(companyType(company.type_user_companies)[0])}</Form.Label>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">Sector empresarial</Form.Label>
            <p className="col-sm-8"><span>{props.inputEmpty(company.business_sector.name)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">Descripción</Form.Label>
            <p className={expand? "col-sm-8" : "truncate-input col-sm-8"}><span>{props.inputEmpty(company.description)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">Ubicación</Form.Label>
            <p className="col-sm-8"><span>{props.inputEmpty(company.city.name + " - " + company.city.department.name)}</span></p>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm="12" className="text-center" >
          <Accordion defaultActiveKey="0">
            <Accordion.Collapse eventKey="1">
              <div className="info-datails">
                <p>Para conocer detalles y contactar la empresa, inicia sesión <a href={`https://testing.handelbay.com/users/sign_in?b=${company.id}`} >AQUÍ</a></p>
                <p>ó</p>
                <button class="btn btn_sign_up_here"><a href="https://handelbay.com/users/sign_up">REGISTRATE GRATIS</a></button>
              </div>
            </Accordion.Collapse>
            <Accordion.Toggle className="show_more" as={Button} variant="link" eventKey="1" onClick={toggle} style={{backgroundColor: statusBtn.bgColor}}>
              {statusBtn.name}
              <Octicon icon={expand ? ChevronUp : ChevronDown} height="20" width="30" />
            </Accordion.Toggle>
          </Accordion>
        </Col>
      </Row>
    </div>  
  )
}