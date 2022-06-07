import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import AboutMe from './AboutSection/AboutMe'
import Skillsets from './AboutSection/Skillsets'
import AboutBgIllustrations from './AboutSection/AboutBgIllustrations'
import useShowElementOnScreen from './hooks/useShowElementOnScreen'

const About = () => {
	const aboutContainer = useRef(null)
	const [bgPosition, setBgPosition] = useState(0)
	const [contentToRender, setContentToRender] = useState('about')  // 'about' or 'skillsets'
	const {
		containerRef: headingRef,
		isVisible: isHeadingVisible
	} = useShowElementOnScreen({ threshold: 0.3 })

	// calculate background position
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (aboutContainer.current) {
				const rect = aboutContainer.current.getBoundingClientRect();
				const viewportHeight = window.innerHeight;
		
				let calculatedPosition = (viewportHeight - rect.top) * 0.08;

				if (calculatedPosition < 10)
					calculatedPosition = 0;
				if (calculatedPosition > 95)  // max 95 (5% bottom offset) - if calculatedPosition > 95, set calculatedPosition to 95
					calculatedPosition = 95;

				setBgPosition(calculatedPosition);
			}
		})
	}, [aboutContainer])

	// set background position
	useEffect(() => {
		if (aboutContainer?.current?.style) {
			aboutContainer.current.style.backgroundPosition = `50% ${bgPosition}%`
		}
	}, [aboutContainer, bgPosition])

	const transitionAttributes = elementName => {
		return {
			key: `${elementName}-content-transition`,
			classNames: `${elementName}-content-transition`,
			in: contentToRender === elementName,
			timeout: { enter: 700, exit: 400 },
			appear: true,
			mountOnEnter: true,
			unmountOnExit: true
		}
	}

	return (
		<section id="about">
			<div className="about-header" ref={aboutContainer}></div>
			<div className="about-main-content">
				<div className="wrapper" ref={headingRef}>
					<CSSTransition { ...transitionAttributes('about') }>
						{/* <!------------------------------- ABOUT ME -------------------------------> */}
						<AboutMe 
							isVisible={ contentToRender === 'about' ? true : false }
							isHeadingVisible={ isHeadingVisible }
							showSkillsets={ () => setContentToRender('skillsets') } 
						/>
					</CSSTransition>

					<CSSTransition { ...transitionAttributes('skillsets') }>
						{/* <!------------------------------ SKILLSETS ------------------------------> */}
						<Skillsets
							isVisible={ contentToRender === 'skillsets' ? true : false }
							showAboutMe={ () => setContentToRender('about') }
						/>
					</CSSTransition>
				</div>

				<AboutBgIllustrations />
			</div>
		</section>
	)
}

export default About