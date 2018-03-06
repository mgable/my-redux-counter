/*
 * action types
 */

export const INC_COUNTER = 'INC_COUNTER'
export const DEINC_COUNTER = 'DEINC_COUNTER'
export const GET_COUNTER = 'GET_COUNTER'
export const GET_NEXT_WORD = 'GET_NEXT_WORD'

/*
 * action creators
 */

export function incrementCounter() {
	console.info("I was called in ");
  return { type: INC_COUNTER }
}

export function deIncrementCounter() {
	console.info("I was called decinc");
  return { type: DEINC_COUNTER }
}

export function getCount() {
	console.info("I was called get");
  return { type: GET_COUNTER }
}

export function getNextWord() {
  return { type: GET_NEXT_WORD}
}