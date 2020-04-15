import { PLAYER_X, PLAYER_O } from 'src/helpers/constants/simple-values'

const getSquareToUpdate = (updatedGameMap, gameMap) => {
	for (let index = 0; index < updatedGameMap.length; index++) {
		if (updatedGameMap[index] !== gameMap[index]) {
			return index
		}
	}
	return -1
}

export const updateMatch = (updatedGameMap, match) => {
	const { currentPlayer, gameMap } = match

	let updated = false
	let updatedMatch = null

	let square = getSquareToUpdate(updatedGameMap, gameMap)
	if (square !== -1) {
		updated = true
	}

	if (updated) {
		updatedMatch = {
			...match,
			currentPlayer: currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X,
			gameMap: [...updatedGameMap]
		}
	}

	return { updated, updatedMatch }
}