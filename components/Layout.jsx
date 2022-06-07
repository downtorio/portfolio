import React from 'react'
import Menu from './Menu'

const Layout = ({ children }) => {
	return (
		<>
			<Menu />
			{ children }
		</>
	)
}

export default Layout