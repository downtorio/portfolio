import React, { useContext } from 'react'
import Link from 'next/link'
import ModalContext from '../contexts/modalContext'

const Custom404 = () => {
	const [isAnyModalOpen, _] = useContext(ModalContext)

	return (
		<main className="not-found">
			<div className="wrapper">
				<section className="not-found-container">
					<h2 className="not-found-heading">
						Lost<span className="question-mark">?</span>
					</h2>
					<p className="not-found-caption">
						Not to worry. Home is just <Link href="/">
							<a className="not-found-link" tabIndex={ isAnyModalOpen ? -1 : 0 }>
								a click away
							</a>
						</Link>.
					</p>
				</section>
			</div>
		</main>
	)
}

export default Custom404
