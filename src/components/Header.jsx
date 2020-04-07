import React from 'react';
// import logo from '../assests/images/Logo-andelBay-02.png'
import logo from '../assests/images/handelbay_logo_menu.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const navItems = [
	{
		caption: 'Pruébalo gratis',
		href: 'https://handelbay.com/users/sign_up'
	},
	{
		caption: 'Ingresar',
		href: 'https://handelbay.com/users/sign_in'
	}
];

export default (props) => {
	return (
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
		<header className="Header shadow">
			<Navbar collapseOnSelect expand="lg" className="Header-container container-fluid">
				<Navbar.Brand href="https://handelbay.com/">
					<img src={logo} alt="logo handelbay" className="Header-logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto downs">
						<Nav.Link className="active" href="#" target="_blank" rel="noopener noreferrer">
							INICIO
							<span class="sr-only" />
						</Nav.Link>
						<NavDropdown title="EMPRESAS" id="collasible-nav-dropdown">
							<NavDropdown.Item
								href="https://handelbay.com/compradores"
								target="_blank"
								rel="noopener noreferrer"
							>
								Compradores
							</NavDropdown.Item>
							<NavDropdown.Item
								href="https://handelbay.com/proveedores"
								target="_blank"
								rel="noopener noreferrer"
							>
								Proveedores
							</NavDropdown.Item>
							<NavDropdown.Item
								href="https://handelbay.com/dual"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dual
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="https://handelbay.com/tarifas" target="_blank" rel="noopener noreferrer">
							TARIFAS
							<span class="sr-only" />
						</Nav.Link>
						<Nav.Link
							href="https://handelbay.com/porquehandelbay"
							target="_blank"
							rel="noopener noreferrer"
						>
							¿POR QUÉ HANDELBAY?
							<span class="sr-only" />
						</Nav.Link>
						<Nav.Link href="https://handelbay.com/alianzas" target="_blank" rel="noopener noreferrer">
							ALIANZAS
							<span class="sr-only" />
						</Nav.Link>
						<Nav.Link href="https://handelbay.com/blog" target="_blank" rel="noopener noreferrer">
							BLOG
							<span class="sr-only" />
						</Nav.Link>
					</Nav>
					<Nav>
						<a
							href="https://handelbay.com/users/sign_up"
							className="Header-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							PRUÉBALO GRATIS
						</a>
						<a
							href="https://handelbay.com/users/sign_in"
							className="Header-button2"
							target="_blank"
							rel="noopener noreferrer"
						>
							INGRESAR
						</a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};
