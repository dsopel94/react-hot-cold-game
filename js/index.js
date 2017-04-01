require('babel-polyfill');
import * as actions from './actions/index';
import ReactDOM from 'react-dom'
import React from 'react'
import Game from './components/game'
import store from './store'
import {Provider} from 'react-redux'
//Generate a random number

// Get input 

//Check Input

//If Input correct tell user they won

//If incorrect, notify them if hot or cold

//Start a new game



document.addEventListener('DOMContentLoaded', () => {
	window.store = store;
	return ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    )
})



