/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

// bg images
import aboutBgLeftDef from '../../img/about-bg-left-def.png';
import aboutBgRightDef from '../../img/about-bg-right-def.png';
import aboutBgLeftXs from '../../img/about-bg-left-xs.png';
import aboutBgRightXs from '../../img/about-bg-right-xs.png';
import aboutBgLeftMd from '../../img/about-bg-left-md.png';
import aboutBgRightMd from '../../img/about-bg-right-md.png';

const AboutBgIllustrations = () => {
	return (
		<div className="about-bg-illustrations" aria-hidden="true">
			<div className="img-left-container">
				<Image
					alt="Illustration of coffee cup, paint brushes and paint tubes" 
					className="about-images-left" 
					src={aboutBgLeftMd}
					sizes="auto"
					width="100%"
					height="100%"
					objectFit="contain"
					objectPosition="bottom center"
					quality={100}
				/>
			</div>

			<div className="img-right-container">
				<Image
					alt="Illustration of camera and computer keyboard" 
					className="about-images-right" 
					src={aboutBgRightMd}
					sizes="auto"
					width="100%"
					height="100%"
					objectFit="contain"
					objectPosition="bottom center"
					quality={100}
				/>
			</div>
		</div>
	)
}

export default AboutBgIllustrations