import React from 'react'
import SingleBar from './SingleBar';

const Chart = () => {
	return (
		<div className="chart-container">
			<SingleBar label="HTML" percentage="95%" />
			<SingleBar label="CSS" percentage="95%" />
			<SingleBar label="Sass" percentage="95%" />
			<SingleBar label="JavaScript" percentage="90%" />
			<SingleBar label="React" percentage="85%" />
			<SingleBar label="Vue" percentage="70%" />
			<SingleBar label="Angular" percentage="50%" />
			<SingleBar label="Node.js" percentage="75%" />
			<SingleBar label="Photoshop" percentage="100%" />
			<SingleBar label="Illustrator" percentage="90%" />
		</div>
	)
}

export default Chart