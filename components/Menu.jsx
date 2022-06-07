import React, { useContext, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import MenuModal from './MenuModal'
import SocialIconsList from './SVG/icons/SocialIconsList'
import ModalContext from '../contexts/modalContext'
import ProjectModalContext from '../contexts/projectModalContext'

const Menu = () => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
	const [isAnyModalOpen, setIsAnyModalOpen] = useContext(ModalContext)
	const [isProjectModalOpen, _] = useContext(ProjectModalContext)

	const displayMenuText = () => {
		return !isMenuModalOpen ? 'Menu' : 'Close'
	}

	const toggleMenuModal = () => {
		if (isMenuModalOpen) {
			setIsMenuModalOpen(false)
			setIsAnyModalOpen(false)
		} else {
			setIsMenuModalOpen(true)
			setIsAnyModalOpen(true)
		}
	}

	const setModalClass = () => {
		return isMenuModalOpen ? 'modal-open' : ''
	}

	return (
		<div className={`menu ${setModalClass()}`}>
			{/* <!------------------------------ BORDERS ------------------------------> */}
			<div className="menu-borders">
				<div 
					className="menu-border border-left" 
					onClick={ toggleMenuModal }
				></div>
				<div className="menu-border border-top"></div>
				<div className="menu-border border-right"></div>
				<div className="menu-border border-bottom"></div>
			</div>

			{/* <!------------------------------ BRAND ------------------------------> */}
			<div className="brand">
				<Link href="/">
					<a className="brand-link">Angelica Lopez</a>
				</Link>
			</div>

			{/* <!------------------------------ MENU ICON ------------------------------> */}
			<button 
				id="menu-icon-btn"
				className="menu-icon-btn" 
				onClick={ toggleMenuModal }
				aria-controls="menu-modal"
				aria-label={`${isMenuModalOpen ? 'Close' : 'Open'} Menu Modal`}
				tabIndex={ isProjectModalOpen ? -1 : 0 }
			>
				<div className="hamburger-icon">
					<div className="hamburger-line"></div>
					<div className="hamburger-line"></div>
					<div className="hamburger-line"></div>
				</div>
				<p className="menu-text">
					{ displayMenuText() }
				</p>
			</button>

			{/* <!--------------------------- SOCIAL ICONS (disabled) ---------------------------> */}
			{/* <CSSTransition
				key="social-icons-main-menu-transition"
				classNames="social-icons-main-menu-transition"
				in={ !isMenuModalOpen }
				timeout={{ exit: 400 }}
			>
				<SocialIconsList className="main-menu-socials" />
			</CSSTransition> */}

			{/* <!------------------------------ MENU MODAL ------------------------------> */}
			<CSSTransition
				key="menu-modal"
				classNames="menu-modal-transition"
				in={ isMenuModalOpen }
				timeout={{ enter: 1200, exit: 1300 }}
				mountOnEnter
				unmountOnExit
			>
				<MenuModal 
					closeMenuModal={() => {
						setIsMenuModalOpen(false)
						setIsAnyModalOpen(false)
					}} 
					isMenuModalOpen={isMenuModalOpen} 
				/>
			</CSSTransition>
		</div>
	)
}

export default Menu