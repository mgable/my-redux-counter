import {combineReducers} from 'redux'
import {INC_COUNTER, DEINC_COUNTER, GET_COUNTER, GET_NEXT_WORD} from './actions.js';

function counter(state = 0, action) {
	console.info("I was set");
	console.info(action);
    switch (action.type) {
      case INC_COUNTER:
        return state + 1
      case DEINC_COUNTER:
        return state - 1
      case GET_COUNTER:
        return state

      default:
        return state
    }
}

const words = ["bat", "shark", "monkey", "dog"];

function answers(state = words, action) {
	console.info("Answeers was called with action");
	console.info(JSON.stringify(state, null, 4));
	console.info(JSON.stringify(action, null, 4));
	return words;
}

const counterApp = combineReducers({
 counter,
 answers
})

export default counterApp
