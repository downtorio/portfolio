/* eslint-disable import/no-anonymous-default-export */
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default email => {
	let invalidEmail = email.trim();
	
	return !re.test(invalidEmail) ? 'Please enter a valid email address' : null;
}