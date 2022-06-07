import React from 'react';
import LinkedInIcon from './LinkedIn';
import InstagramIcon from './Instagram';
import TwitterIcon from './Twitter';

const SocialIconsList = ({ className }) => {
	return (
		<ul className={`social-icons ${ className }`}>
			<li className="social-icon">
				<a href="!#" className="social-icon-link">
					<LinkedInIcon className="social-icon-svg icon-linkedin" />
				</a>
			</li>
			<li className="social-icon">
				<a href="!#" className="social-icon-link">
					<InstagramIcon className="social-icon-svg icon-instagram" />
				</a>
			</li>
			<li className="social-icon">
				<a href="!#" className="social-icon-link">
					<TwitterIcon className="social-icon-svg icon-twitter" />
				</a>
			</li>
		</ul>
	);
}
 
export default SocialIconsList;