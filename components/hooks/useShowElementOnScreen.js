import { useCallback, useEffect, useRef, useState } from 'react'

/***************************************************************
 * Sets an intersection observer in the document and then 
 * @param {object} options  - options for Intersection Observer (threshold, rootMargin, etc)
 * @param {boolean} runOnce - to check for either initial intersection or continuous intersection
 * @returns { containerRef, isVisible }
 *     containerRef - the element to check for intersection
 *     isVisible    - a boolean to notify if containerRef has been intersected
/***************************************************************/
const useShowElementOnScreen = (options = {}, runOnce = true) => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const observerCallback = useCallback(
		(entries, observer) => {
			const [entry] = entries;
	
			if (runOnce) {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
				return;
			}
	
			setIsVisible(entry.isIntersecting);
		}, [runOnce]
	)

	useEffect(() => {
		const observer = new IntersectionObserver(observerCallback, options);
		if (containerRef.current)
			observer.observe(containerRef.current);

		return () => {
			if (containerRef.current)
				observer.unobserve(containerRef.current);
		}
	}, [containerRef, observerCallback, options])

	return { containerRef, isVisible };
}

export default useShowElementOnScreen;