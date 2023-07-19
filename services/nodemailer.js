// switched to FormSubmit; don't need this anymore but leaving here for future ref
const nodemailer = require('nodemailer')
const emailTemplate = require('./emailTemplate')

// remember to catch() any errors after this method is called
module.exports = async (name, email, message) => {
	const outputEmail = emailTemplate(name, email, message)

	// create reusable transporter object
	let transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
	})

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: `"NODEMAILER - ${ name }" <${ process.env.MAIL_USER }>`,
    to: process.env.MAIL_USER,
    subject: '✨ New Contact Email ✨',
    text: message,
    html: outputEmail
	})

	// console.log('Message sent: ', info.messageId);
}