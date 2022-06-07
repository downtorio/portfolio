/* eslint-disable react/no-unescaped-entities */   // apostrophes in paragraphs won't generate warnings
import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import ModalContext from '../../contexts/modalContext'

const AboutMe = ({ /*isAnyModalOpen,*/ isHeadingVisible, isVisible, showSkillsets }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)

	const transitionAttributes = (element, index) => {
		return {
			key: index ? `about-${element}-transition-${index}` : `about-${element}-transition`,
			classNames: `about-${element}-transition`,
			in: isHeadingVisible,
			mountOnEnter: true
		}
	}

	return (
		<div id="about-me" className="about-content" aria-hidden={!isVisible}>
			{/* ------------------------------- HEADING ------------------------------- */}
			<CSSTransition timeout={ 800 } { ...transitionAttributes('heading') }>
				<h2 className="about-content-heading section-heading content-heading">
					About
				</h2>
			</CSSTransition>

			<div className="about-underline-container">
				<CSSTransition timeout={ 700 } { ...transitionAttributes('underline') }>
					<div className="about-underline-img"></div>
				</CSSTransition>
			</div>

			{/* ------------------------------- MAIN CONTENT ------------------------------- */}
			<div className="about-content-text-container">
				<CSSTransition timeout={ 1000 } { ...transitionAttributes('content', 1) }>
					<p className="about-content-text section-paragraph">
						I'm a web developer by day, and still a web developer by night.
					</p>
				</CSSTransition>
				<CSSTransition timeout={ 1150 } { ...transitionAttributes('content', 2) }>
					<p className="about-content-text section-paragraph">
						Although I practice full-stack web development, my focus and passion is primarily dedicated to the <span><em>frontend</em></span> spectrum. I love creating web pages that are responsive and dynamic, accessible and user friendly but still aesthetically pleasing.
					</p>
				</CSSTransition>
				<CSSTransition timeout={ 1200 } { ...transitionAttributes('content', 3) }>
					<p className="about-content-text section-paragraph">
						I also have a background as a visual artist. I graduated from the University of Calgary with a Bachelor of Fine Arts. On top of cultivating skills in photography, drawing and painting, I've developed seasoned skills in Adobe Photoshop and Illustrator, which I rely on to create engaging UX and UI designs.
					</p>
				</CSSTransition>
				<CSSTransition timeout={ 1250 } { ...transitionAttributes('content', 4) }>
					<p className="about-content-text section-paragraph">
						Other things I love include: films, classical literature, and coffee!
					</p>
				</CSSTransition>

				{/* ------------------------------- SKILLSETS LINK ------------------------------- */}
				<CSSTransition timeout={ 1350 } { ...transitionAttributes('content', 5) }>
					<button	 
						aria-controls="skillsets"
						aria-label="View Skillsets"
						className="about-content-link section-paragraph"
						onClick={ showSkillsets }
						tabIndex={ isAnyModalOpen ? -1 : 0 }
					>
						Skillsets <span className="arrow arrow-right">&#8594;</span>
					</button>
				</CSSTransition>
			</div>
		</div>
	)
}

export default AboutMe