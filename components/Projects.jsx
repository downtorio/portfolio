import React, { useContext, useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { PROJECTS } from '../data/projects'
import { PROJECT_FILTERS } from '../data/projectFilters'

import ProjectThumbnails from './ProjectsSection/ProjectThumbnails'
import ProjectModal from './ProjectsSection/ProjectModal'
import useShowElementOnScreen from './hooks/useShowElementOnScreen'
import ModalContext from '../contexts/modalContext'
import ProjectModalContext from '../contexts/projectModalContext'

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('All')
	const [projects, setProjects] = useState([])
	const [selectedProject, setSelectedProject] = useState(null)
	const [isAnyModalOpen, setIsAnyModalOpen] = useContext(ModalContext)
	const [isProjectModalOpen, setIsProjectModalOpen] = useContext(ProjectModalContext)
	const {
		containerRef: headingRef,
		isVisible: isHeadingVisible
	} = useShowElementOnScreen({ threshold: 0.35 })
	const {
		containerRef: thumbnailRef,
		isVisible: isThumbnailVisible
	} = useShowElementOnScreen({ rootMargin: '-180px 0px' })

	// filter projects
	useEffect(() => {
		setProjects(PROJECTS.filter(
			project => activeFilter === 'All' ? project : project.filters.includes(activeFilter)
		))
	}, [activeFilter])

	const closeModal = () => {
		setIsProjectModalOpen(false)
		setIsAnyModalOpen(false)
		setSelectedProject(null)
	}

	const renderFilters = () => (
		PROJECT_FILTERS.map(filter => (
			<li
				key={`${filter}-list-item`}
				className={`filter-item ${ filter === activeFilter ? 'active' : '' }`}
				onClick={() => {
					// reset projects first before switching filters — smoothens the transition
					setProjects([])
					setActiveFilter(filter)
				}}
			>
				<button className="filter-btn" tabIndex={ isAnyModalOpen ? -1 : 0 }>
					{ filter }
				</button>
			</li>
		))
	)

	const transitionAttributes = (elementName, condition) => {
		return {
			key: `${elementName}-transition`,
			classNames: `${elementName}-transition`,
			in: condition,
			mountOnEnter: true
		}
	}

	return (
		<section id="projects">
			<div className="wrapper" ref={ headingRef }>
				<div className="projects-header">
					{/* <!------------------------------ HEADING ------------------------------> */}
					<CSSTransition 
						timeout={ 600 } 
						{ ...transitionAttributes('projects-heading', isHeadingVisible || isThumbnailVisible) }
					>
						<h2 className="projects-heading section-heading">
							Projects
						</h2>
					</CSSTransition>

					<div className="projects-underline-container">
						<CSSTransition
							timeout={ 700 }
							{ ...transitionAttributes('projects-underline', isHeadingVisible || isThumbnailVisible) }
						>
							<div className="projects-underline-img"></div>
						</CSSTransition>
					</div>
				</div>

				{/* <!------------------------------ FILTERS ------------------------------> */}
				<div className="filter-container">
					<CSSTransition
						timeout={{ enter: 1000 }}
						{ ...transitionAttributes('filter-items', isHeadingVisible || isThumbnailVisible) }
					>
						<ul className="filter-items">
							{ renderFilters() }
						</ul>
					</CSSTransition>
				</div>

				{/* <!------------------------------ THUMBNAILS ------------------------------> */}
				<div className="projects-gallery" ref={ thumbnailRef }>
					<TransitionGroup className="projects-gallery-container" component={null} appear enter exit>
						<ProjectThumbnails
							activeFilter={activeFilter}
							isThumbnailVisible={ isThumbnailVisible }
							projects={ projects }
							setSelectedProject={ setSelectedProject }
						/>
					</TransitionGroup>
				</div>
			</div>

			{/* <!------------------------------ MODAL ------------------------------> */}
			<CSSTransition
				timeout={{ enter: 500, exit: 1000 }}
				unmountOnExit
				appear
				{ ...transitionAttributes('project-modal', isProjectModalOpen) }
			>
				<ProjectModal 
					closeModal={closeModal}
					selectedProject={selectedProject}
					setSelectedProject={setSelectedProject}
				/>
			</CSSTransition>
		</section>
	)
}

export default Projects