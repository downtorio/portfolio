import React, { useContext } from 'react'
import Image from 'next/image'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import ModalContext from '../../contexts/modalContext';
import ProjectModalContext from '../../contexts/projectModalContext';

// import images in thumbnails/ directory
const requestedThumbnails = require.context('../../img/projects/thumbnails', false, /.jpg$/);

const ProjectThumbnails = ({ 
	/*isAnyModalOpen,*/ isThumbnailVisible, projects, /*setIsAnyModalOpen,*/ setSelectedProject, /*setShowProjectModal */
}) => {
	const [isAnyModalOpen, setIsAnyModalOpen] = useContext(ModalContext)
	const [_, setIsProjectModalOpen] = useContext(ProjectModalContext)

	const loadProject = project => {
		setSelectedProject(project)
		setIsProjectModalOpen(true)
		setIsAnyModalOpen(true)
	}

	return (
		projects?.map((project, index) => (
			<CSSTransition
				key={`thumbnail-${project.id}-transition`}
				classNames="thumbnail-transition"
				timeout={{ appear: 1200, enter: 1200, exit: 200 }}
				in={ isThumbnailVisible }
				mountOnEnter
				appear
			>
				<button 
					key={`${index}-thumb-container`}
					className="projects-thumbnail-container" 
					aria-controls="project-modal"
					aria-label="Show Project Details"
					onClick={ () => loadProject(project) }
					tabIndex={ isAnyModalOpen ? -1 : 0 }
				>
					<Image
						src={requestedThumbnails(`./${project.thumbnail}-700.jpg`)}
						alt={`${project.name} site thumbnail`}
						className="projects-gallery-thumbnail"
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</button>
			</CSSTransition>
		))
	)
}

export default ProjectThumbnails