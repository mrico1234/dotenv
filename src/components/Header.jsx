import React from 'react'
// import logo from '../assests/images/Logo-andelBay-02.png'
import logo from '../assests/images/handelbay_logo_menu.png'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const navItems = [
  {
    caption: 'Pruébalo gratis',
    href: 'https://handelbay.com/users/sign_up'
  },
  {
    caption: 'Ingresar',
    href: 'https://handelbay.com/users/sign_in'
  }
]

export default (props) => {
  return(
    // <header className="Header">
    //   <img src={ logo } alt="logo handelbay" className="Header-logo" />
    //   <nav className="Header-buttons">
    //     <ul className="Header-buttons">
    //       {
    //         navItems.map((item, index) =>(
    //           <li key={index}>
    //             <a className={index===1?'Header-button2':'Header-button'} href={item.href} target='_blank' rel="noopener noreferrer">
    //               { item.caption }
    //             </a>
    //           </li>
              
    //         ))
    //       }
    //     </ul>
    //   </nav>
    // </header>
    <header className="Header">
      <Navbar collapseOnSelect expand="lg" className="Header-container">
        <Navbar.Brand href="#home"><img src={logo} alt="logo handelbay" className="Header-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto downs">
            <Nav.Link href="#">INICIO</Nav.Link>
            <NavDropdown title="EMPRESAS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Compradores</NavDropdown.Item>
              <NavDropdown.Item href="#">Proveedores</NavDropdown.Item>
              <NavDropdown.Item href="#">Dual</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">TARIFAS</Nav.Link>
            <Nav.Link href="#">¿POR QUÉ HANDELBAY?</Nav.Link>
            <Nav.Link href="#">ALIANZAS</Nav.Link>
            <Nav.Link href="#">BLOG</Nav.Link>
          </Nav>
          <Nav>
            <button href="#" className="Header-button">PRUÉBALO GRATIS</button>
            <button href="#" className="Header-button2">INGRESAR</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}