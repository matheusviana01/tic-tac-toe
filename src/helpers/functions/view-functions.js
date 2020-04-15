const getClassFromElement = element => {
	return element.getAttribute('class')
}

export const getIndexFromElement = element => {
	const selector = getClassFromElement(element.parentElement)
	return parseInt(selector.replace('square', '')) - 1
}