import React, { useState } from 'react';
import { Form, Row, Col, Accordion, Button} from 'react-bootstrap'
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react"
import { datesProcess } from '../helpers/general'

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

  return(
    <div className="result-container">
      <Row className="ml-n1 ml-lg-n2">

        <Col xs="4" sm="4" md="3" className="info-image">
          <img src={`https://testing.handelbay.com${proces.company.logo.url}`} alt={`logo ${proces.company.name}`} className="result-image p-0" />
        </Col>

        <Row className="info-dates col-8 col-sm-8 d-md-none">
          <Col xs="3" sm="3" className="p-0 pl-2 mb-1">
            <p><span className="green_HB">ID {props.inputEmpty(proces.id)}</span></p>
            <p><span className="size-id-secop">Proceso</span></p>
          </Col>
          <Col xs="5" sm="5" className="text-center p-0 mb-1">
            <p><span className="green_HB">{props.inputEmpty(datesProcess(proces.end_date))}</span></p>
            <p><span className="size-id-secop">Fecha de cierre</span></p>
          </Col>
          <Col xs="4" sm="3" className="text-center p-0 pr-3 mb-1">
            <p><span className="green_HB">{props.inputEmpty(status(proces.status))}</span></p>
            <p><span className="size-id-secop">Estado</span></p>
          </Col>
          <Col xs="12" sm="12" className="buyer-process p-0 pl-2 m-0">
            <p><span>{props.inputEmpty(proces.company.name)}</span></p>
          </Col>
        </Row>

        <Col xs="12" sm="12" md="7" className="fields">
          <Form.Group as={Row}>
            <Form.Label column md="4" className="label-detail d-none d-sm-none d-md-block">ID proceso</Form.Label>
            <p className="col-md-8 d-none d-sm-none d-md-block"><span><strong>{props.inputEmpty(proces.id)}</strong></span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column xs="12" sm="4" className="label-detail">Descripción proceso</Form.Label>
            <p className={expand? "col-11 col-sm-7 col-md-8" : "col-11 col-sm-7 col-md-8 truncate-input"}><span>{props.inputEmpty(proces.description)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md="4" className="label-detail d-none d-sm-none d-md-block">Comprador</Form.Label>
            <p className="col-md-8 d-none d-sm-none d-md-block"><span>{props.inputEmpty(proces.company.name)}</span></p>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column xs="12" sm="4" className="label-detail">Tipo de convocatoria</Form.Label>
            <p className="col-11 col-sm-7 col-md-8"><span>Abierto</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column xs="12" sm="4" className="label-detail">Ciudad</Form.Label>
            <p className="col-11 col-sm-7 col-md-8"><span>{props.inputEmpty(proces.city.name + " - " + proces.city.department)}</span></p>
          </Form.Group>
        </Col>

        <Col sm="2" className="info-dates text-center d-none d-sm-none d-md-block pr-md-4">
          <br />
          <div className="col-md-12 p-0">
            <p><span className="green_HB">{props.inputEmpty(datesProcess(proces.end_date))}</span></p>
            <p><span>Fecha de cierre</span></p>
          </div>
          <div className="col-md-12 p-0">
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
                <p className="pl-md-3">Para conocer detalles y contactar la empresa, inicia sesión <a href="https://handelbay.com/users/sign_in">AQUÍ</a></p>
                <p>ó</p>
                <button className="btn btn_sign_up_here"><a href="https://handelbay.com/users/sign_up">REGISTRATE GRATIS</a></button>
              </div>
            </Accordion.Collapse>
            <Accordion.Toggle className="show_more" as={Button} variant="link" eventKey="1" onClick={toggle} style={{backgroundColor: statusBtn.bgColor}}>
              {statusBtn.name}
              <Octicon icon={expand ? ChevronUp : ChevronDown} height={20} width={30} />
            </Accordion.Toggle>
          </Accordion>
        </Col>
      </Row>
    </div>
  )
}