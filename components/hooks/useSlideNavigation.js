import { useCallback, useState, useReducer } from 'react'

/*******************************************************
 * @param 	{number} slidesLength - length of slides to navigate through (for limiting "right" navigation) 
 * @returns { currentSlideIndex, slideDirection, shiftSlide } 
 *    currentSlideIndex  -  index of currently focused slide
 *    slideDirection     -  direction the slide will be shifting towards ('left' or 'right')
 *    shiftSlide         -  function to navigate the slide (takes parameters 'left' or 'right')
/*******************************************************/
const useSlideNavigation = slidesLength => {
	// reducer for setting the "current" slide
	const setCurrentSlideIndex = (currentSlideIndex, action) => {
		if (action.type === 'slide-left' && currentSlideIndex > 0)
			return currentSlideIndex - 1
		if (action.type === 'slide-right' && currentSlideIndex < action.maxSlide)
			return currentSlideIndex + 1

		return currentSlideIndex
	}

	const [currentSlideIndex, dispatch] = useReducer(setCurrentSlideIndex, 0)
	const [slideDirection, setSlideDirection] = useState('right')

	const shiftSlide = useCallback(
		direction => {
			setSlideDirection(direction)
			direction === 'left'
				? dispatch({ type: 'slide-left', maxSlide: null })
				: dispatch({ type: 'slide-right', maxSlide: slidesLength - 1 })
		}, [slidesLength]
	)

	return { currentSlideIndex, slideDirection, shiftSlide }
}

export default useSlideNavigation