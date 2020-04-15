import React, { useState, useEffect } from 'react'

import initialMatch from 'src/helpers/constants/initial-match'

import Game from 'src/components/game/Game'
import Score from 'src/components/score/Score'

import { updateMatch } from 'src/helpers/functions/match-functions'

const App = () => {
	const [match, setMatch] = useState(initialMatch)

	useEffect(() => { }, [match])

	const handleGameEvent = ({ gameMap }) => {
		const { updated, updatedMatch } = updateMatch(gameMap, match)
		if (updated) {
			setMatch(updatedMatch)
		}
	}

	return (
		<div className="main-container">
			<div className="main-header">
				<h1>Tic-tac-toe</h1>
			</div>
			<div className="main-content">
				<Game match={match} onGameEvent={handleGameEvent} />
			</div>
			<div className="main-footer">
				<Score match={match} />
			</div>
		</div>
	)
}

export default App