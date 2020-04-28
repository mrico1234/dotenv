import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

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
      <Row className="text-center contaner-option">
        <button name="type" value="1" className={style.id === "1"? "btn-menu-press col-4" : "btn-menu col-4"} onClick={changeType}>Empresas</button>
        <button name="type" value="2" className={style.id === "2"? "btn-menu-press col-4" : "btn-menu col-4"} onClick={changeType}>Procesos HandelBay</button>
        <button name="type" value="3" className={style.id === "3"? "btn-menu-press col-4" : "btn-menu col-4"} onClick={changeType}>Secop II</button>
      </Row>
    </div>
   );
}
 
export default SwitchBar;