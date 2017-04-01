require('babel-polyfill');

export const INIT_GAME = 'INIT_GAME'
export const initGame = () => ({
	type: INIT_GAME
})

export const COMPARE_NUMBER = 'COMPARE_NUMBER'
export const compareNumber = input => ({
	type: COMPARE_NUMBER,
	input
})

export const IS_CORRECT = 'IS_CORRECT' 
export const isCorrect = () => ({
	type: IS_CORRECT
})

export const IS_HOT = 'IS_HOT'
export const isHot = () => ({
	type: IS_HOT
})

export const IS_COLD = 'IS_COLD'
export const isCold = () => ({
	type: IS_COLD
})