import React, { useState } from 'react';
import { Form, Row, Col,  Accordion, Button} from 'react-bootstrap'
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react"
import { datesProcess, formatterCurrency } from '../helpers/general'

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

  return (
    <div className="result-container">
      <Row>

        <Row className="col-12 col-sm-12">
          <Col xs="8" sm="8" className="fields d-block d-sm-block d-md-none ml-3">
            <Form.Group as={Row}>
              <p className="ml-3 p-0"><span><strong>{inputEmpty(process.referencia_del_proceso)}</strong></span></p>
              <label className="col-10 ml-3 p-0 size-id-secop"><strong>ID proceso</strong></label>
            </Form.Group>
          </Col>

          <Col xs="3" sm="3" className="info-dates text-right d-block d-sm-block d-md-none pr-sm-3">
            <Form.Group as={Row}>
              <p className="col-12 p-0"><span className="green_HB">{inputEmpty(datesProcess(process.fecha_de_recepcion_de))}</span></p>
              <p className="col-12 p-0"><span>Fecha de cierre</span></p>
              <p className="col-12 p-0"><span className="green_HB">{inputEmpty(process.estado_del_procedimiento)}</span></p>
              <p className="col-12 p-0"><span>Estado</span></p>
            </Form.Group>
          </Col>
        </Row>


        <Col xs="12" sm="12" md="9" className="fields ml-3 ml-md-4 ml-xl-5">
          <Form.Group as={Row}>
            <Form.Label column md="3" className="label-detail d-none d-sm-none d-md-block">ID proceso</Form.Label>
            <p className="col-md-8 ml-3 p-0 px-sm-3 d-none d-sm-none d-md-block"><span><strong>{inputEmpty(process.referencia_del_proceso)}</strong></span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column xs="10" sm="10" md="3" className="label-detail">Nombre del proceso</Form.Label>
            <p className={expand ? "col-10 col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3" : "col-10 col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3 truncate-input"}><span>{inputEmpty(process.nombre_del_procedimiento)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column xs="10" sm="10" md="3" className="label-detail">Entidad compradora</Form.Label>
            <p className="col-10 col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3"><span>{inputEmpty(process.entidad)}</span></p>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column xs="10" sm="10" md="3" className="label-detail">Código UNSPSC</Form.Label>
            <p className="col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3"><span>{inputEmpty(process.codigo_principal_de_categoria).replace("V1.", "")}</span></p>
          </Form.Group>
        </Col>

        <Col md="2" className="info-dates pr-4 text-center d-none d-sm-none d-md-block">
          <div className="col-md-12 p-0">
            <p className="p-0"><span className="green_HB">{inputEmpty(datesProcess(process.fecha_de_recepcion_de))}</span></p>
            <p className="p-0"><span>Fecha de cierre</span></p>
          </div>
          <div className="col-md-12 p-0">
            <p className="p-0"><span className="green_HB">{inputEmpty(process.estado_del_procedimiento)}</span></p>
            <p className="p-0"><span>Estado</span></p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <Accordion defaultActiveKey="0">
            <Accordion.Collapse eventKey="1">
              <Row>
                <Col md="9" className="fields ml-3 ml-md-4 ml-xl-5">
                  <Form.Group as={Row}>
                    <Form.Label column xs="10" sm="10" md="3" className="label-detail">Ubicación</Form.Label>
                    <p className="col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3"><span>{inputEmpty(process.ciudad_entidad)} - {inputEmpty(process.departamento_entidad)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xs="10" sm="10" md="3" className="label-detail">Valor del contrato</Form.Label>
                    <p className="col-sm-10 col-md-5 ml-3 p-0 p-sm-0 px-md-3"><span>{formatterCurrency(inputEmpty(process.precio_base))}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xs="10" sm="10" md="3" className="label-detail">Descripción</Form.Label>
                    <p className="col-10 col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3"><span>{inputEmpty(process.descripci_n_del_procedimiento)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xs="10" sm="10" md="3" className="label-detail">Tipo de contratación</Form.Label>
                    <p className="col-10 col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3"><span>{inputEmpty(process.tipo_de_contrato)}</span></p>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xs="10" sm="10" md="3" className="label-detail">Abrir en SECOP</Form.Label>
                    <p className="col-10 col-sm-10 col-md-8 ml-3 p-0 p-sm-0 px-md-3 truncate-input"><span><a href={process.urlproceso.url} target="_blank" rel="noopener noreferrer">{process.urlproceso.url}</a></span></p>
                  </Form.Group>
                </Col>

                <Col md="2" className="info-dates pr-4 text-center d-none d-sm-none d-md-block">
                  <div className="p-0">
                    <p className="p-0"><span className="green_HB">{inputEmpty(datesProcess(process.fecha_de_publicacion_del))}</span></p>
                    <p className="p-0"><span>Fecha de publicación</span></p>
                  </div>
                </Col>
              </Row>
            </Accordion.Collapse>
            <Accordion.Toggle className="show_more" as={Button} variant="link" eventKey="1" onClick={toggle} style={{ backgroundColor: statusBtn.bgColor }} >
              {statusBtn.name}
              <Octicon icon={expand ? ChevronUp : ChevronDown} height={20} width={30} />
            </Accordion.Toggle>
          </Accordion>
        </Col>
      </Row>
    </div>
  )
}
 
export default Secop;