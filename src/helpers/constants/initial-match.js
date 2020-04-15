import { PLAYER_X } from 'src/helpers/constants/simple-values'

import initialPlayers from 'src/helpers/constants/initial-players'
import initialScores from 'src/helpers/constants/initial-scores'
import initialRounds from 'src/helpers/constants/initial-rounds'
import initialGameMap from 'src/helpers/constants/initial-game-map'

const initialMatch = {
	currentPlayer: PLAYER_X,
	players: initialPlayers,
	rounds: initialRounds,
	scores: initialScores,
	gameMap: initialGameMap,
	gameOver: false,
	isEndGame: false
}

export default initialMatch