import { createContext, useState } from 'react'

const ProjectModalContext = createContext()

export const ProjectModalProvider = ({ children }) => {
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

	return (
		<ProjectModalContext.Provider value={[isProjectModalOpen, setIsProjectModalOpen]}>
			{ children }
		</ProjectModalContext.Provider>
	)
}

export default ProjectModalContext