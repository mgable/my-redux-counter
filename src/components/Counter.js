import React, { Component } from 'react';


const Counter = ({  onCounterInc, onCounterDeInc, count, word }) => (
	<div>
		<p>
			Clicked: <span id="value">{count}</span>&nbsp;
			<span>The new word is &quot;{word[count]}&quot;</span>&nbsp;
			<button onClick={() => onCounterInc()}>+</button>
			<button onClick={() => onCounterDeInc()}>-</button>
		</p>
	</div>
)

export default Counter