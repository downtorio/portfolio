import React from 'react'

const SingleBar = ({ label, percentage }) => {
	return (
		<div className="bar-container">
			<div className="bar-label-container">
				<p className="bar-label">{ label }</p>
			</div>
			<div className="bar-width">
				<div className="bar-percentage" style={{ width: percentage }}></div>
			</div>
		</div>
	)
}

export default SingleBar