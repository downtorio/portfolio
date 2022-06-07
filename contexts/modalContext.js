import { createContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
	const [isAnyModalOpen, setIsAnyModalOpen] = useState(false)

	return (
		<ModalContext.Provider value={[isAnyModalOpen, setIsAnyModalOpen]}>
			{ children }
		</ModalContext.Provider>
	)
}

export default ModalContext