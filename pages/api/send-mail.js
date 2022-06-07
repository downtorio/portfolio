const sendMail = require('../../services/nodemailer')

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name: senderName, email: senderEmail, message } = req.body
		await sendMail(senderName, senderEmail, message)
			.then(() => res.status(200).send({ mailStatus: 'success' }))
			.catch(error => {
				console.error(error)
				res.status(503).send({ mailStatus: 'failed' })
			})
	} else {
		res.status(404).json({ message: 'The requested resource was not found' })
	}
}