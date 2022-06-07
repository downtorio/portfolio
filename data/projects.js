export const PROJECTS = [
	{
		id: 1,
		name: 'LN Associates Inc.',
		description: `LN Associates Inc is a Canadian tax filing corporation that specializes in tax preparation and audit assistance. The goal for this website was to create a clean and minimal layout that reflected the company’s professionalism while maintaining visual simplicity that wouldn’t overwhelm the user. The general page styling was done with CSS and Sass incorporating a fully responsive layout, scripts were coded using Vanilla JavaScript, and all header images were photographed by myself and compressed to accommodate various viewport sizes.`,
		thumbnail: 'project2-thumbnail',
		filters: ['HTML', 'CSS', 'Sass', 'JavaScript'],
		images: [
			{ fileName: 'project2-01', alt: 'LN Associates Inc. Home Page' },
			{ fileName: 'project2-04', alt: 'Tablet and phone mockups of LN Associates Inc. About Page — featuring details about company team and company mission' },
			// { fileName: 'project2-02', alt: 'LN Associates Inc. About Page - featuring details about company team and company mission' },
			{ fileName: 'project2-03', alt: 'LN Associates Inc. Contact Page - showing business address, phone number, email, and location via Google Map' },
			// { fileName: 'project2-04', alt: 'Tablet and phone mockups of LN Associates Inc. About Page' }
		],
		launchedSite: 'https://lnassociates.ca'
	},
	{
		id: 3,
		name: 'Emma\'s Blog',
		description: `A fun side project, "Emma" is inspired by the Jane Austen novel of the same name. The concept was to take the events of the novel and narrate them in the form of first-person online blog posts, readable in both light mode and dark mode versions. With this project, I combined two of my passions — web development and literature — to create a blog with functioning CRUD (Create-Read-Update-Delete) operations. It's a fullstack project with a structured frontend layout and an equally structured backend configuration. The blog owner has the ability to create, update and delete blog posts directly from the site itself with the aid of a RESTful API linked to a MongoDB database. Each blog post is viewable to all, but submitting and deleting comments are reserved for authenticated users.`,
		thumbnail: 'project4-thumbnail',
		filters: ['HTML', 'CSS', 'Sass', 'Vue', 'Node.js', 'MongoDB', 'Authentication', 'REST APIs'],
		images: [
			{ fileName: 'project4-01', alt: 'Main "Posts" page in light mode, showing individual posts lined in a masonry layout' },
			{ fileName: 'project4-02', alt: 'Laptop and phone mockups of the Emma\'s Blog home page — the laptop version is in light mode while the phone version is displayed in dark mode' },
			{ fileName: 'project4-03', alt: 'Edit Post page in dark mode, showing a form populated with a post\'s "Title", "Image URL" and "Body" fields' },
			{ fileName: 'project4-04', alt: 'Tablet and phone mockups of the Emma\'s Blog Post show page. The tablet version is in dark mode, the phone version is in light mode.' }
		],
		launchedSite: null
	},
	{
		id: 4,
		name: 'Bliss On Earth',
		description: `Bliss on Earth is owned by April Hernandez, a certified Theta Healer. Her website advertises her certifications, services, and the history and benefits of Theta Healing®. Appointments may be booked by reaching out to April Hernandez through the contact details presented on her page, and service packages may be purchased through the site itself via PayPal, utilizing the PayPal API to authenticate the user and process payments securely.`,
		thumbnail: 'project3-thumbnail',
		filters: ['HTML', 'CSS', 'Sass', 'Angular', 'Node.js', 'PayPal API'],
		images: [
			{ fileName: 'project3-01', alt: 'Bliss on Earth landing page' },
			{ fileName: 'project3-02', alt: 'Bliss on Earth about page, with "Get To Know Me" section and ThetaHealing disclaimer' },
			{ fileName: 'project3-05', alt: 'Tablet mockup of Bliss on Earth\'s About page, next to a phone mockup of their Services\' "Book an Appointment" section' },
			{ fileName: 'project3-03', alt: 'List of certifications, services and prices, with a PayPal button for services payment, and photos of a lotus flower and a burning incense' },
			// { fileName: 'project3-04', alt: 'Section to book an appointment and view contact info, and ThetaHealing disclaimer' },
		],
		launchedSite: 'https://blissonearth.ca'
	},
	{
		id: 2,
		name: 'Photo Gallery',
		description: `Photo Gallery is a gallery-structured page designed to showcase a collection of images. Adhering to a mobile-first and repsonsive layout, and implementing images optimized for a variety of viewport sizes, it features an elegant design with straightforward and accessible navigation systems. As a React project, it incorporates Redux to take care of global state management, Next.js to handle server-side rendering, and React Transition Group to assist in the implementation of engaging UX/UI.`,
		thumbnail: 'project1-thumbnail',
		filters: ['HTML', 'CSS', 'Sass', 'React', 'Redux', 'Next.js'],
		images: [
			// { fileName: 'project1-01', alt: 'Photo Gallery Site Landing Page' },
			{ fileName: 'project1-05', alt: 'Laptop and phone mockups of Photo Gallery site\'s landing page' },
			{ fileName: 'project1-02', alt: 'Gallery page showing fixed menu bars and grid-aligned thumbnail images' },
			{ fileName: 'project1-03', alt: 'Full-screen show page with image on the left; title, date, caption, and navigation controls on the right' },
			// { fileName: 'project1-04', alt: 'Full page menu - Contact section' },
			{ fileName: 'project1-06', alt: 'Tablet mockup of image show page and phone mockup of contact modal' }
		],
		launchedSite: null
	},
];