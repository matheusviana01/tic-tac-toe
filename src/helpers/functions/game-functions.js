import { PLAYER_X, PLAYER_X_VALUE, PLAYER_O_VALUE, EMPTY_VALUE } from 'src/helpers/constants/simple-values'

export const updateGame = (currentPlayer, square, gameMap) => {
	let updated = false
	let updatedGameMap = null

	const squareValue = gameMap[square]
	if (squareValue === EMPTY_VALUE) {
		updated = true
		updatedGameMap = [...gameMap]
		updatedGameMap[square] = (currentPlayer === PLAYER_X) ? PLAYER_X_VALUE : PLAYER_O_VALUE
	}

	return { updated, updatedGameMap }
}