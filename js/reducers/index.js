import * as actions from '../actions'


const initialGameState = {
	answer: Math.floor(Math.random() * 100) + 1,
	isCorrect: false,
	isHot: false,
	isCold: false,
	guesses: 0,
	gameActive: false
}

export const hotColdReducer = (state=initialGameState, action) => {
	if (action.type=== actions.INIT_GAME) {
		return {...state, 
			gameActive: true,
			isCorrect: false
		}
	} else if (action.type === actions.COMPARE_NUMBER) {
		if (action.input == state.answer) {
			return {...state, 
				isCorrect: true,
				gameActive: false,
				guesses: state.guesses += 1,
				isCold: false,
				isHot: false
			}
		} else if (Math.abs(action.input - state.answer) > 20) {
			return {...state, 
				isHot: false,
				isCold: true,
				guesses: state.guesses +=1
			}
		} else if (Math.abs(action.input - state.answer) < 20) {
			return {...state, 
				isHot: true,
				isCold: false,
				guesses: state.guesses += 1
			}
		}
	}
	return state;
}