import React, { useState } from 'react';
import { Form, Row, Col,  Accordion, Button} from 'react-bootstrap'
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react"

const Secop = ({process, inputEmpty}) => {

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

  const datesProcess = (value) => {
    let date
    date = new Date(value)
    return new Intl.DateTimeFormat('es', {year: 'numeric', month: 'short',day: '2-digit'}).format(date)
  }

  return (
    <div className="result-container">
      <Row>
        <Col sm="9" className="fields" style={{marginLeft: "5%"}}>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">ID proceso</Form.Label>
            <p className="col-sm-4 mg-left"><span><strong>{inputEmpty(process.nit_entidad)}</strong></span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">Nombre del proceso</Form.Label>
            <p className={expand ? "col-sm-8 mg-left" : "truncate-input col-sm-8 mg-left"}><span>{inputEmpty(process.nombre_del_procedimiento)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">Entidad compradora</Form.Label>
            <p className="col-sm-8 mg-left"><span>{inputEmpty(process.entidad)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="3" className="label-detail">Código UNSPSC</Form.Label>
            <p className="col-sm-8 mg-left"><span>{inputEmpty(process.codigo_principal_de_categoria).replace("V1.", "")}</span></p>
          </Form.Group>
        </Col>

        <Col sm="2" className="info-dates pd-rg text-center">
          <br />
          <div>
            <p><span className="green_HB">{inputEmpty(datesProcess(process.fecha_de_publicacion_del))}</span></p>
            <p><span>Fecha de publicación</span></p>
          </div>
          <div>
            <p><span className="green_HB">{inputEmpty(process.estado_del_procedimiento)}</span></p>
            <p><span>Estado</span></p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <Accordion defaultActiveKey="0">
            <Accordion.Collapse eventKey="1">
              <Row>
                <Col sm="9" className="fields" style={{marginLeft: "5%"}}>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3" className="label-detail">Ubicación</Form.Label>
                    <p className="col-sm-8 mg-left"><span>{inputEmpty(process.ciudad_entidad)} - {inputEmpty(process.departamento_entidad)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3" className="label-detail">Valor del contrato</Form.Label>
                    <p className="col-sm-5 mg-left"><span>${inputEmpty(process.precio_base)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3" className="label-detail">Descripción</Form.Label>
                    <p className="col-sm-8 mg-left"><span>{inputEmpty(process.descripci_n_del_procedimiento)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3" className="label-detail">Tipo de contratación</Form.Label>
                    <p className="col-sm-8 mg-left"><span>{inputEmpty(process.tipo_de_contrato)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3" className="label-detail">Abrir en SECOP</Form.Label>
                    <p className="col-sm-8 mg-left truncate-input"><span><a href={process.urlproceso.url}>{process.urlproceso.url}</a></span></p>
                  </Form.Group>
                </Col>

                <Col sm="2" className="info-dates pd-rg text-center">
                  <div>
                    <p><span className="green_HB">{inputEmpty(datesProcess(process.fecha_de_recepcion_de))}</span></p>
                    <p><span>Fecha de recepcion de ofertas</span></p>
                  </div>
                </Col>
              </Row>
            </Accordion.Collapse>
            <Accordion.Toggle className="show_more" as={Button} variant="link" eventKey="1" onClick={toggle} style={{ backgroundColor: statusBtn.bgColor }} >
              {statusBtn.name}
              <Octicon icon={expand ? ChevronUp : ChevronDown} height="20" width="30" />
            </Accordion.Toggle>
          </Accordion>
        </Col>
      </Row>
    </div>
  )
}
 
export default Secop;