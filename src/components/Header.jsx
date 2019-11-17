import React from 'react'
import logo from '../assests/images/Logo-andelBay-02.png'

const navItems = [
  {
    caption: 'Pruébalo gratis',
    href: 'https://handelbay.com'
  },
  {
    caption: 'Ingresar',
    href: 'https://handelbay.com'
  }
]

export default (props) => {
  return(
    <header className="Header">
      <img src={ logo } alt="logo handelbay" className="Header-logo" />
      <nav className="Header-buttons">
        <ul className="Header-buttons">
          {
            navItems.map((item, index) =>(
              <li key={index}>
                <a className={index===1?'Header-button2':'Header-button'} href={item.href} target='_blank' rel="noopener noreferrer">
                  { item.caption }
                </a>
              </li>
              
            ))
          }
        </ul>
      </nav>
    </header>
  )
}