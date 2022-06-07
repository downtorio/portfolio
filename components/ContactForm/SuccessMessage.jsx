import React, { useContext } from 'react'
import ModalContext from '../../contexts/modalContext'

const SuccessMessage = ({ /*isAnyModalOpen,*/ resetMailStatus }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)

	return (
		<div className="success-container" key="success-container">
				<div className="success-content">
					<h4 className="success-heading">Thank you for reaching out</h4>
					<p>Your message has been delivered and Angelica will reply to you shortly.</p>
					<button className="form-btn btn" onClick={ resetMailStatus } tabIndex={ isAnyModalOpen ? -1 : 0 }>
						Return to Form
					</button>
				</div>
		</div>
	)
}

export default SuccessMessage