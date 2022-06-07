/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CSSTransition } from 'react-transition-group'
// import Image from 'next/image'

const ProjectImage = ({ imageAlt, currentImgObject, slideDirection}) => {
	const renderImage = () => {
		const { 
			xs: { default: { src: imageXs } }, 
			sm: { default: { src: imageSm } }
		} = currentImgObject

		return (
			// CSSTransition for when image first appears on modal mount
			<CSSTransition
				key={`${imageSm}-image-transition`}
				classNames="modal-image-transition"
				timeout={{ appear: 900, exit: 400 }}
				mountOnEnter
				appear
				in
			>
				<img
					alt={ imageAlt }
					className={`project-img slide-${slideDirection}`}
					src={ imageSm }
					srcSet={`${ imageXs } 635w,
									 ${ imageSm }`}
				/>
			</CSSTransition>
		)
	}

	return currentImgObject && renderImage()
}

export default ProjectImage