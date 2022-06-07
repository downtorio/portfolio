import React, { useContext } from 'react'
import { Field } from 'react-final-form'
import ModalContext from '../../contexts/modalContext'

const TextareaField = ({ label }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)

	return (
		<div className={`form-${label}-container`} key={`${label}-textarea`}>
			<label htmlFor={label}>{ label }</label>
			<Field 
				name={label}
				id={label}
				className={`form-${label}`}
				rows="3"
				component="textarea"
				tabIndex={ isAnyModalOpen ? -1 : 0 }
				required
			/>
		</div>
	)
}

export default TextareaField