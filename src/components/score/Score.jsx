import React from 'react'

import { PLAYER_X, PLAYER_O } from 'src/helpers/constants/simple-values';

import 'css/score.css'

const Score = ({ match }) => {
	const { rounds, scores, currentPlayer } = match

	const getRounds = () => {
		const { current, total } = rounds
		return [current, '/', total].join(' ')
	}

	const addCurrentStyle = playerStyle => {
		return [playerStyle, 'current-player'].join(' ')
	}

	const getCurrentStyleToPlayerX = currentPlayer => {
		const playerXStyle = 'player-x-score'
		return (currentPlayer === PLAYER_X) ? addCurrentStyle(playerXStyle) : playerXStyle
	}

	const getCurrentStyleToPlayerO = currentPlayer => {
		const playerOStyle = 'player-o-score'
		return (currentPlayer === PLAYER_O) ? addCurrentStyle(playerOStyle) : playerOStyle
	}

	return (
		<div className="score-container">
			<div className={getCurrentStyleToPlayerX(currentPlayer)}>
				<span className="score-title">Player X</span>
				<span className="score-value">{scores[PLAYER_X]}</span>
			</div>
			<div className="rounds">
				<span className="score-title">Rounds</span>
				<span className="score-value">{getRounds()}</span>
			</div>
			<div className={getCurrentStyleToPlayerO(currentPlayer)}>
				<span className="score-title">Player O</span>
				<span className="score-value">{scores[PLAYER_O]}</span>
			</div>
		</div>
	)
}

export default Score