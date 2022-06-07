import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ProjectDetails from './ProjectDetails'
import ProjectImage from './ProjectImage';
import useSlideNavigation from '../hooks/useSlideNavigation';
import ProjectModalContext from '../../contexts/projectModalContext';
// import all project images in projects/ directory
const requestedImages = require.context(`../../img/projects`, false, /.png$/)


const ProjectModal = ({ closeModal, /*isModalVisible,*/ selectedProject }) => {
	const slideRef = useRef()
	const [projectImages, setProjectImages] = useState([])
	const [isProjectModalOpen, _] = useContext(ProjectModalContext)
	const { currentSlideIndex: currentImgIndex, 
					slideDirection, 
					shiftSlide: slideImage } = useSlideNavigation(selectedProject?.images?.length)

	const keydownNavigation = useCallback(
		event => {
			if (event.keyCode === 37) slideImage('left')
			if (event.keyCode === 39) slideImage('right')
			if (event.keyCode === 27) closeModal()
		}, [closeModal, slideImage]
	)

	// Fetch all image files for selected project when component mounts and then save to state
	// create separate object for each image with corresponding xs and sm files
	useEffect(() => {
		if (selectedProject?.images) {
			let imageFilesArray = []
			for (const imageObject of selectedProject.images) {
				imageFilesArray.push({
					xs: requestedImages(`./${imageObject.fileName}-xs.png`),
					sm: requestedImages(`./${imageObject.fileName}-sm.png`)
				})
			}
			setProjectImages(imageFilesArray)
		}
	}, [selectedProject])

	// Prevent vertical scrolling when modal is open; revert scrolling when closed
	useEffect(() => {
		if (isProjectModalOpen)
			document.querySelector('body').style.overflowY = 'hidden'
		return () => document.querySelector('body').style.overflowY = 'scroll'
	}, [isProjectModalOpen])
	
	// Enable slide navigation on right/left arrow keyup; close modal on esc key press
	useEffect(() => {
		document.addEventListener('keydown', keydownNavigation)
		return () => document.removeEventListener('keydown', keydownNavigation)
	}, [keydownNavigation])
	
	// Slide navigation on left/right swipe gestures
	useEffect(() => { 
		if (slideRef?.current) {
			const Hammer = require('hammerjs')  // SSR prevents proper "import" due to "window" not yet existing

			const mc = new Hammer(slideRef.current)
			mc.get('pan').set({ threshold: 70 })
			mc.on('panleft panright', event => {
				if (event.isFinal)
					event.type === 'panleft' ? slideImage('right') : slideImage('left')
			})
		}
	}, [slideImage])

	return (
		<section id="project-modal" className="project-modal" aria-hidden={!isProjectModalOpen} ref={slideRef}>
			<button className="close-icon" aria-label="Close" onClick={closeModal}>
				<p className="x">
					<svg fill="#45312d" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
				</p>
				<p className="close-text">Close</p>
			</button>

			<main className="wrapper">
				<div className="project-modal-main-content">
					{/* <!------------------------------ IMAGE ------------------------------> */}
					<div className="image">
						<TransitionGroup component={null}>
							{/* CSSTransition for switching between image slides */}
							<CSSTransition
								key={`${currentImgIndex}-image-transition`}
								classNames="modal-image-transition"
								timeout={{ enter: 350, exit: 400 }}
								mountOnEnter
								appear
								in
							>	
								<ProjectImage 
									// currentImgIndex={currentImgIndex} 
									// projectImages={selectedProject?.images}
									slideDirection={slideDirection} 
									currentImgObject={projectImages[currentImgIndex]}
									imageAlt={selectedProject?.images[currentImgIndex]?.alt}
								/>
							</CSSTransition>
						</TransitionGroup>
				</div>

					{/* <!------------------------------ SHOWCASE ------------------------------> */}
					{ selectedProject && (
						<div className="project-showcase">
							<CSSTransition
								key="project-showcase-transition"
								classNames="project-showcase-transition"
								in={ isProjectModalOpen }
								timeout={{ appear: 1200, enter: 1200, exit: 500 }}
								appear
							>
								<ProjectDetails 
									project={selectedProject} 
									currentImgIndex={currentImgIndex} 
									slideLeft={() => slideImage('left')}
									slideRight={() => slideImage('right')}
								/>
							</CSSTransition>
						</div>
					)}
				</div>
			</main>
		</section>
	)
}

export default ProjectModal