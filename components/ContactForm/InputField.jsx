import React, { useContext } from 'react'
import { Field } from 'react-final-form'
import ModalContext from '../../contexts/modalContext'

const InputField = ({ label, type }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)

	const inputErrorMsg = error => (
		<span className="input-error-msg">{ error }</span>
	)

	return (
		<Field name={label}>
			{({ input, meta }) => (
				<div className={`form-${label}-container`} key={`${label}-input`}>
					<label htmlFor={label}>{ label }</label>
					<input
						{...input}
						className={`form-${label} ${ meta.error ? 'error' : ''}`}
						id={ label }
						name={ label }
						type={ type }
						tabIndex={ isAnyModalOpen ? -1 : 0 }
						required
					/>

					{ meta.error && meta.touched && inputErrorMsg(meta.error) }
				</div>
			)}
		</Field>
	)
}

export default InputField