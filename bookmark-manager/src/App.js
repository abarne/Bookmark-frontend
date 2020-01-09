import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainCat from './mainCat/MainCat.js';

const App = () => {
	let [ mainCat, setMainCat ] = useState([]);
	let [ newMain, setNewMain ] = useState('');

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
	useEffect(
		() => {
			axios
				.post(`localhost:4000/api/main/add`, newMain)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log('error adding new category, ', error);
				});
		},
		[ newMain ]
	);

	if (mainCat.length === 0) {
		return <h1>You have no bookmark categories set yet</h1>;
	}
	return (
		<div>
			<div className="titleAndButton">
				<h1 className="mainPageTitle">Your Bookmark Categories</h1>
				<label>
					New Category:{' '}
					<input
						className="mainCatInput"
						type="text"
						value={newMain}
						onChange={(e) => setNewMain(e.target.value)}
					/>
				</label>
				<input type="submit" value="Submit" />
			</div>
			<div className="mainCatDiv">{mainCat.map((item) => <MainCat data={item} />)}</div>;
		</div>
	);
};

export default App;
