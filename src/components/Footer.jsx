import React from 'react'

import logoFacebook from '../assests/images/logo-facebook.svg';
import logoInstagram from '../assests/images/logo-instagram.svg';
import logoYoutube from '../assests/images/logo-youtube.svg';
import logoLinkedin from '../assests/images/logo-linkedin.svg';

export default (props) => {
  return(
    <>
      <div className="footer-container-logos">
				<a href="https://handelbay.com">
					<img src={logoFacebook} alt="logoFacebook" height="30px" />
				</a>
				<a href="https://handelbay.com">
					<img src={logoInstagram} alt="logo instagram" height="30px" />
				</a>
				<a href="https://handelbay.com">
					<img src={logoYoutube} alt="logo Youtube" height="30px" />
				</a>
				<a href="https://handelbay.com">
					<img src={logoLinkedin} alt="logo Linkedin" height="30px" />
				</a>
			</div>
			<p className="text-footer">2019 &copy; Todos los derechos reservados - Ignite Technologies S.A.S</p>
    </>
  )
}