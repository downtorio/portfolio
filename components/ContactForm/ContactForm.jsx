import React, { useContext, useState } from 'react'
import { Form } from 'react-final-form'
import axios from 'axios'

import InputField from './InputField'
import TextareaField from './TextareaField'
import validateEmail from '../../services/validateEmail'
import ModalContext from '../../contexts/modalContext'
import { FORM_FIELDS } from '../../data/formFields'


const ContactForm = ({ mailStatus, setMailStatus }) => {
	const [isAnyModalOpen, _] = useContext(ModalContext)
	const [isSending, setIsSending] = useState(false)

	const generateEmailError = email => {
		const errors = {}

		if (email) {
			const emailError = validateEmail(email)
			if (emailError)
				errors.email = emailError
		}

		return errors
	}

	const renderFailedMailStatus = () => (
		<p className={`contact-mail-status failed`}>
			Sorry, an error occurred while sending your mail. Please try again momentarily.
		</p>
	)

	const renderFormFields = () => {
		return FORM_FIELDS.map(field => field.type !== 'textarea'
			? renderInputContainer(field)
			: renderTextareaContainer(field)
		)
	}

	const renderInputContainer = ({ label, type }) => (
		<InputField key={`${label}-inputfield`} label={label} type={type} />
	)

	const renderTextareaContainer = ({ label }) => (
		<TextareaField key={`${label}-textareafield`} label={label} />
	)

	const sendContactMail = async values => {
		setIsSending(true)
		await axios.post('/api/send-mail', values)
			.then(res => setMailStatus(res.data.mailStatus))
			.catch(() => setMailStatus('failed'))
		setIsSending(false)
	}
	
	return (
		<Form
			onSubmit={ sendContactMail }
			validate={ values => generateEmailError(values.email) }
			validateOnBlur={ true }
			render={({ handleSubmit, form}) => {
				if (mailStatus === 'success')
					form.reset()
				
				return (
					<form onSubmit={handleSubmit}>
						{ /*isContactHeadingVisible &&*/ renderFormFields() }
						{ (mailStatus === 'failed') && renderFailedMailStatus() }

						<button 
							type="submit" 
							className="form-btn btn" 
							disabled={isSending} 
							tabIndex={ isAnyModalOpen ? -1 : 0 }
						>
							Get In Touch
						</button>
					</form>
				)
			}}
		/>
	)
}

export default ContactForm