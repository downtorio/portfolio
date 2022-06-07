import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import MenuBgLaptop from './SVG/illustrations/MenuBgLaptop';
import MenuBgHeadphones from './SVG/illustrations/MenuBgHeadphones';
import SocialIconsList from './SVG/icons/SocialIconsList';
import { MENU_LINKS } from '../data/menuLinks';


const MenuModal = ({ closeMenuModal, isMenuModalOpen }) => {
	const closeOnEscKey = useCallback(
		event => {
			if (event.keyCode === 27) closeMenuModal()
		}, [closeMenuModal]
	)

	// prevent vertical scrolling when modal is open; revert when closed
	useEffect(() => {
		if (isMenuModalOpen)
			document.querySelector('body').style.overflowY = 'hidden'
		return () => document.querySelector('body').style.overflowY = 'scroll'
	}, [isMenuModalOpen])

	// listen for Esc key press then close modal
	useEffect(() => {
		document.addEventListener('keydown', closeOnEscKey);
		return () => document.removeEventListener('keydown', closeOnEscKey);
	}, [closeOnEscKey])

	const transitionAttributes = (elementName, uniqueKey) => {
		return {
			key: uniqueKey ? `${uniqueKey}-transition` : `menu-${elementName}-transition`,
			classNames: `menu-${elementName}-transition`,
			in: isMenuModalOpen,
			appear: true
		}
	}

	const renderMenuLinks = () => {
		return MENU_LINKS.map(link => (
			// eslint-disable-next-line react/jsx-key -- key is in transitionAttributes
			<CSSTransition
				timeout={ 1600 }
				{...transitionAttributes('list-item', link.route)}
			>
				<li className="menu-nav-item" key={ link.route }>
					<Link href={ link.route }>
						<a onClick={ () => closeMenuModal() } className="menu-nav-item-link" tabIndex={0}>
							{ link.label }
						</a>
					</Link>
				</li>
			</CSSTransition>
		))
	}

	return (
		<div 
			id="menu-modal" 
			className="menu-modal" 
			aria-hidden={!isMenuModalOpen} 
			aria-labelledby="menu-icon-btn"
			role="dialog"
		>
			<CSSTransition
				timeout={{ appear: 1050, exit: 550 }}
				{ ...transitionAttributes('modal-bg-laptop') }
			>
				<MenuBgLaptop className="menu-modal-bg-laptop" />
			</CSSTransition>
			<CSSTransition
				timeout={ 1650 }
				{ ...transitionAttributes('modal-bg-headphones') }
			>
				<MenuBgHeadphones className="menu-modal-bg-headphones" />
			</CSSTransition>
			
			<div className="wrapper">
				<nav className="menu-nav">
					<ul className="menu-nav-list">
						<TransitionGroup>
							{ renderMenuLinks(isMenuModalOpen) }
						</TransitionGroup>
						
						{/* <SocialIconsList className="open-modal-socials" /> */}
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default MenuModal