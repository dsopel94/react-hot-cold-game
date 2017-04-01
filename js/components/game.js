import React, {Component} from 'react';

export default class Game extends Component {
	constructor(props) {
		super(props)
		this.startGame = this.startGame.bind(this)
		this.submitGuess = this.submitGuess.bind(this)
		this.restart = this.restart.bind(this)
	}
	startGame() {

	}

	submitGuess() {

	}

	restart() {

	}

	render() {
		return (
			<div className="game-container">
				Welcome to the Hot and Cold Game!
				<button className="startGame" onClick={this.startGame}>Start</button>
				<input className="userInput" onClick={this.userInput}></input>
				<button className="submitGuess" onClick={this.submitGuess}>Guess!</button>
				<button className="restart" onClick={this.restart}>Restart</button>
			</div>
			)
	}
}