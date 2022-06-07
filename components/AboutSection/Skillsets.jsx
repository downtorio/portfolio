import React, { useContext } from 'react'
import Chart from '../BarChart/Chart'
import ModalContext from '../../contexts/modalContext'

const Skillsets = ({ /*isAnyModalOpen,*/ isVisible, showAboutMe }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)

	return (
		<div id="skillsets" className="skillsets-content" aria-hidden={!isVisible}>
			<h3 className="skillsets-content-heading section-heading content-heading">
				Skillsets
			</h3>
			<div className="skillsets-underline-container">
				<div className="skillsets-underline-img"></div>
			</div>

			<div className="skillsets-graph">
				<Chart />
			</div>
			
			<button 
				aria-controls="about-me"
				aria-label="View About Me"
				className="skillsets-content-link section-paragraph"
				onClick={ showAboutMe }
				tabIndex={ isAnyModalOpen ? -1 : 0 }
			>
				<span className="arrow arrow-left">&#8592;</span> About Me
			</button>
		</div>
	)
}

export default Skillsets