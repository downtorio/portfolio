import React from 'react'
import SocialIconsList from './SVG/icons/SocialIconsList'

const Footer = () => {
	return (
		<footer id="footer">
			<div className="wrapper">
				<div className="footer-copyright-container">
					<p className="footer-copyright">
						&copy; 2023 Angelica Lopez
					</p>
					{/* <p className="footer-copyright">
						All rights reserved
					</p> */}
				</div>
				<div className="footer-socials-container">
					<p className="footer-copyright">
						All rights reserved
					</p>
					{/* <SocialIconsList /> */}
				</div>
			</div>
		</footer>
	)
}

export default Footer