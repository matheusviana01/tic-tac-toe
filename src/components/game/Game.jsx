import React from 'react'

import { updateGame } from 'src/helpers/functions/game-functions'
import { getIndexFromElement } from 'src/helpers/functions/view-functions'

import 'css/game.css'


const Game = ({ match, onGameEvent }) => {
	const { currentPlayer, gameMap } = match

	const handleClick = ({ target }) => {
		const square = getIndexFromElement(target)
		const { updated, updatedGameMap } = updateGame(currentPlayer, square, gameMap)
		if (updated) {
			onGameEvent({
				gameMap: updatedGameMap
			})
		}
	}

	const setSquares = () => {
		return gameMap.map((square, index) => {
			const key = index + 1
			const squareStyles = "square" + key
			return (
				<div key={key} className={squareStyles}>
					<div className="square-value" onClick={(event) => handleClick(event)}>
						{square}
					</div>
				</div>
			)
		})
	}

	return (
		<div className="game-container">
			{setSquares()}
		</div>
	)
}

export default Game