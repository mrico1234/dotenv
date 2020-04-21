import React, { useState } from 'react';
import { Form, Row, Col, Accordion, Button} from 'react-bootstrap'
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react"

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

  const [statusBtn, setStatus] = useState({
    bgColor: "#53d765", name: "VER MÁS"
  })
  const [expand, setExpand] = useState("")

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

  const datesProcess = (value) => {
    let date
    date = new Date(value)
    return new Intl.DateTimeFormat('es', {year: 'numeric', month: 'short',day: '2-digit'}).format(date)
  }

  return(
    <div className="result-container">
      <Row>
        <Col sm="3" className="info-image">
          <img src={`https://testing.handelbay.com${proces.company.logo.url}`} alt={`logo ${proces.company.name}`} className="result-image" />
        </Col>

        <Col sm="7" className="fields">
          <Form.Group as={Row}>
            <Form.Label column sm="4" className="label-detail">ID proceso</Form.Label>
            <p className="col-sm-8"><span><strong>{props.inputEmpty(proces.id)}</strong></span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="4" className="label-detail">Descripción proceso</Form.Label>
            <p className={expand? "col-sm-8" : "truncate-input col-sm-8"}><span>{props.inputEmpty(proces.description)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="4" className="label-detail">Comprador</Form.Label>
            <p className="col-sm-8"><span>{props.inputEmpty(proces.company.name)}</span></p>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="4" className="label-detail">Tipo de convocatoria</Form.Label>
            <p className="col-sm-8"><span>Abierto</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="4" className="label-detail">Ciudad</Form.Label>
            <p className="col-sm-8"><span>{props.inputEmpty(proces.city.name + " - " + proces.city.department)}</span></p>
          </Form.Group>
        </Col>

        <Col sm="2" className="info-dates text-center">
          <br />
          <div>
            <p><span className="green_HB">{props.inputEmpty(datesProcess(proces.end_date))}</span></p>
            <p><span>Fecha de cierre</span></p>
          </div>
          <div>
            <p><span className="green_HB">{props.inputEmpty(status(proces.status))}</span></p>
            <p><span>Estado</span></p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="12" className="text-center" >
          <Accordion defaultActiveKey="0">
            <Accordion.Collapse eventKey="1">
              <div className="info-datails">
                <p>Para conocer detalles y contactar la empresa, inicia sesión <a href="https://handelbay.com/users/sign_in">AQUÍ</a></p>
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