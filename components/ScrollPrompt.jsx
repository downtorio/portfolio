import React from 'react'
import { CSSTransition } from 'react-transition-group'

/***************************************
 * @param {string} element - the element which this ScrollPrompt is assigned to ('landing' or 'contact')
 * @param {string} scrollPosition - the section currently visible in the viewport ('landing' or 'contact')
 * @param {function} scrollToTop (optional) - scrolls to top of the document
 ***************************************/
const ScrollPrompt = ({ element, scrollPosition, scrollToTop }) => {
	const scrollColor = () => {
		return element === 'contact' ? 'dark' : ''
	}

	const scrollText = () => {
		return element === 'contact' ? 'Back to Top' : 'Scroll'
	}

	const transitionAttributes = elementName => {
		return {
			key: `scroll-${elementName}-transition`,
			classNames: `scroll-${elementName}-transition`,
			in: element === scrollPosition,
			appear: true,
			mountOnEnter: true,
			unmountOnExit: true
		}
	}

	return (
		<div className={`scroll-container ${scrollColor()}`} onClick={ scrollToTop }>
			<CSSTransition
				timeout={{ appear: 2000, enter: 1000, exit: 200 }}
				{ ...transitionAttributes('text') }
			>
				<p id="scroll-text" className="scroll-text">
					{ scrollText() }
					<span className="arrow">&#8594;</span>
				</p>
			</CSSTransition>
			<CSSTransition
				timeout={{ appear: 1700, enter: 600, exit: 200 }}
				{ ...transitionAttributes('line') }
			>
				<div className="scroll-line"></div>
			</CSSTransition>
		</div>
	)
}

export default ScrollPrompt