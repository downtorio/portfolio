module.exports = (name, email, message) => `
	<div class="email" style="
		background-color: #393E46;
		color: #EEEEEE;
		font-family: serif;
		letter-spacing: 0.04em;
		margin: 2em;
		padding: 1em 2em;
	">
	<h2 style="border-bottom: 1px solid #eee; padding: 0.3em 0;">New Contact Email</h2>

	<h3 style="color: #4ECCA3; font-size: 1.2rem; margin-top: 2em;">NAME:</h3>
	<p>${ name }</p>

	<h3 style="color: #4ECCA3; font-size: 1.2rem; margin-top: 2em;">EMAIL:</h3>
	<a style="color: #EEE;" href="mailto:${email}?subject=Re:Angelica\'s%20Contact%20Email">${ email }</a>			

	<h3 style="color: #4ECCA3; font-size: 1.2rem; margin-top: 2em;">MESSAGE:</h3>
	<p style="font-weight: 300; letter-spacing: 0.06em; line-height: 1.8;">${ message }</p>
	</div>
`