import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const SwitchBar = ({ changeSwitchBar, switchbar }) => {
  const [style, setStyle] = useState({ id: switchbar.type })

  const addClass = (value) => {
    setStyle({ id: value })
  }

  const changeType = (event) => {
    changeSwitchBar(event)
    addClass(event.target.value)
  }

  return ( 
    <div className="container-menu">
      <Row className="text-center">
        <Col sm="4">
          <div><button name="type" value="1" className={style.id === "1"? "btn-menu-press" : "btn-menu"} onClick={changeType}>EMPRESAS</button></div>
        </Col>
        <Col sm="4">
          <button name="type" value="2" className={style.id === "2"? "btn-menu-press" : "btn-menu"} onClick={changeType}>PROCESOS HANDELBAY</button>
        </Col>
        <Col sm="4">
          <button name="type" value="3" className={style.id === "3"? "btn-menu-press" : "btn-menu"} onClick={changeType}>SECOP II</button>
        </Col>
      </Row>
    </div>
   );
}
 
export default SwitchBar;