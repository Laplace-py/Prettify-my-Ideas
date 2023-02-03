import React from 'react';
import Accordion from './Accordion.js';
import Title from './Title.js';
import "./sub-items/sub-items.css";
function App() {
	
	function parseJSON() {
		// get the json file
		const json = require('./Ideas.json');
		// parse the json file
		const data = JSON.parse(JSON.stringify(json));
		// return the parsed json file
		return data;
	}
	return (
		<div className="parent">
				<Title />
				{parseJSON().map((item) => <Accordion key={item.id} id={item.id} json={item} />)}
		</div>
	);
}

export default App;
