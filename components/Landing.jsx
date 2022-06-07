import React, { useContext, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import useShowElementOnScreen from './hooks/useShowElementOnScreen';
import ModalContext from '../contexts/modalContext';

const Landing = ({ scrollToContact, setScrollPosition }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)
	const {
		containerRef: headerRef,
		isVisible: isHeaderFullyVisible
	} = useShowElementOnScreen({ threshold: 0.9, rootMargin: '-30px 0px 80px' }, false)
	const {
		containerRef: subRef,
		isVisible: isLandingSubVisible
	} = useShowElementOnScreen({ threshold: 0.5 }, false)

	useEffect(() => {
		isHeaderFullyVisible ? setScrollPosition('landing') : setScrollPosition(null)
	}, [isHeaderFullyVisible, setScrollPosition])

	const headerTransitionAttributes = elementName => {
		return {
			key: `landing-${elementName}-transition`,
			appear: true,
			in: true
		}
	}

	return (
		<section id="landing">
			<header className="header" ref={headerRef}>
				<CSSTransition
					{...headerTransitionAttributes('salmon-bg')}
					classNames="landing-salmon-bg-transition"
					timeout={ 900 }
				>
					<div id="salmon-bg" className="salmon-bg"></div>
				</CSSTransition>

				{/* <!--------------------------------- HEADING ---------------------------------> */}
				<div className="landing-heading-container">
					<h1 className="landing-heading">
						<CSSTransition 
							{...headerTransitionAttributes('greeting')} 
							timeout={ 1000 } 
							classNames="landing-heading-transition"
						>
							<span id="greeting" className="greeting">
								Hi, my name is
							</span>
						</CSSTransition>
						<CSSTransition
							{...headerTransitionAttributes('name')}
							classNames="landing-heading-transition"
							timeout={ 1700 }
						>
							<span id="name" className="name">
								<span className="first">Angelica</span>
								<span className="break"></span>
								<span className="last">Lopez</span>
							</span>
						</CSSTransition>
					</h1>

					<div className="landing-underline-container">
						<CSSTransition
							{...headerTransitionAttributes('underline')}
							classNames="landing-underline-transition"
							timeout={{ appear: 1500, enter: 1500 }}
						>
							<div className="landing-underline-img"></div>
						</CSSTransition>
					</div>
				</div>
			</header>

			{/* <!--------------------------------- SUBSECTION ---------------------------------> */}
			<div id="landing-subsection" className="sub" ref={subRef}>
				<div className="wrapper">
					<div id="sub-text-container" className="sub-text-container">
						<CSSTransition
							key="landing-subtext-transition"
							classNames="landing-subtext-transition"
							timeout={{ enter: 900, exit: 500 }}
							in={ isLandingSubVisible }
							mountOnEnter
						>
							<div>
								<p className="sub-text">
									I am an artist and <span>full-stack web developer</span> residing in Alberta, Canada.
								</p>
								<div className="contact-button-link" onClick={ scrollToContact }>
									<button 
										aria-label="Scroll to Contact form"
										className="btn" 
										tabIndex={ isAnyModalOpen ? -1 : 0 }
									>
										Contact Me
									</button>
								</div>
							</div>
						</CSSTransition>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Landing