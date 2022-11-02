import React from 'react'

const ProjectDetails = ({ project, currentImgIndex, slideLeft, slideRight }) => {
	const { name, description, images, filters } = project

	const renderNavArrowLeft = () => {
		return currentImgIndex === 0
			? <div className="nav-arrow-left"></div>
			: <button className="nav-arrow-container nav-arrow-left" aria-label="Previous Image" onClick={ slideLeft }>
					<span className="arrow-icon">
						<svg fill="#45312d" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
					</span>
					<span className="arrow-label">Previous</span>
				</button>
	}

	const renderNavArrowRight = () => {
		if (currentImgIndex < images.length - 1)
			return (
				<button className="nav-arrow-container nav-arrow-right" aria-label="Next Image" onClick={ slideRight }>
					<span className="arrow-label">Next</span>
					<span className="arrow-icon">
						<svg fill="#45312d" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
					</span>
				</button>
			)
	}

	const renderRepoButton = () => {
		return (project?.repoLink)
			? (
				<a href={ project.repoLink } className="btn btn-dark btn-dark-outline" target="_blank" rel="noreferrer" tabIndex={0}>
					View Repo
				</a>
			) : null
	}

	const renderSiteButton = () => {
		return (project?.launchedSite)
			? (
				<a href={ project.launchedSite } className="btn btn-dark" target="_blank" rel="noreferrer" tabIndex={0}>
					Visit Site
				</a>
			) : null
	}

	return (
		<div>
			<div className="project-heading">
				<div className="project-heading-top">
					<h2 className="project-title">
						{ name }
					</h2>
					<ul className="project-filters-list">
						{filters.map((filter, i) => (
							<li key={i} className="project-filters-list-item">
								{ filter }
							</li>
						))}
					</ul>
				</div>
				<p className="project-img-count">
					{ currentImgIndex + 1 } / { images?.length }
				</p>
			</div>
			<div className="nav-arrows">
				{ renderNavArrowLeft() }
				{ renderNavArrowRight() }
			</div>
			<div className="project-caption">
				<p className="caption-text">
					{ description }
				</p>
			</div>
			{ renderSiteButton() }
			{ renderRepoButton() }
		</div>
	)
}

export default ProjectDetails