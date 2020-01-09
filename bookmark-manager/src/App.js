import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainCat from './mainCat/MainCat.js';

const App = () => {
	let [ mainCat, setMainCat ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:4000/api/main`)
			.then((response) => {
				console.log('get main cat response.data, ', response.data);
				setMainCat(response.data);
			})
			.catch((error) => {
				console.log('could not get data, ', error);
			});
	}, []);

	if (mainCat.length === 0) {
		return <h1>You have no bookmark categories set yet</h1>;
	}
	return <div>{mainCat.map((item) => <MainCat data={item} />)}</div>;
};

export default App;
