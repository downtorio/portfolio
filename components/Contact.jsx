/* eslint-disable react/display-name */  // forwardRef was throwing our linter off, had to disable
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import SuccessMessage from './ContactForm/SuccessMessage';
import ContactForm from './ContactForm/ContactForm';
import useShowElementOnScreen from './hooks/useShowElementOnScreen';

const Contact = React.forwardRef(({ /*isAnyModalOpen,*/ setScrollPosition }, ref) => {
	const [mailStatus, setMailStatus] = useState(null)  // 'success', 'failed' or null
	const {
		containerRef: headingRef,
		isVisible: isHeadingVisible
	} = useShowElementOnScreen({ threshold: 0.3 })
	const {
		containerRef: backToTopRef,
		isVisible: isContactWaypointVisible
	} = useShowElementOnScreen({ threshold: 1 }, false)

	useEffect(() => {
		isContactWaypointVisible ? setScrollPosition('contact') : setScrollPosition(null)
	}, [isContactWaypointVisible, setScrollPosition])

	const transitionAttributes = (elementName, condition) => {
		return {
			key: `contact-${elementName}-transition`,
			classNames: `contact-${elementName}-transition`,
			// in: condition,
			in: isHeadingVisible,
			mountOnEnter: true
		}
	}

	return (
		<section id="contact" ref={ref}>
			<div className="wrapper" ref={headingRef}>
				{/* <!--------------------------- HEADING --------------------------> */}
				<div className="contact-header">
					<CSSTransition timeout={ 600 } {...transitionAttributes('heading', isHeadingVisible)}>
						<h2 className="contact-heading section-heading">
							Contact
						</h2>
					</CSSTransition>

					<div className="underline-contact-container">
						<CSSTransition timeout={ 1000 } {...transitionAttributes('underline', isHeadingVisible)}>
							<div className="underline-contact-img"></div>
						</CSSTransition>
					</div>
				</div>

				{/* <!------------------------- CONTACT FORM ------------------------> */}
				<div className="contact-form-container">
					<CSSTransition
						timeout={ 1000 }
						appear
						{ ...transitionAttributes('form') }
					>
						{ mailStatus === 'success'
							? <SuccessMessage resetMailStatus={() => setMailStatus(null)} />
							: <ContactForm mailStatus={mailStatus} setMailStatus={setMailStatus} /> }
					</CSSTransition>
					
					<div className="back-to-top-waypoint" ref={backToTopRef}></div>
				</div>
			</div>
		</section>
	)
})

export default Contact