import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MainCat from './MainCat.js';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';
import SubCatCard from './SubCatCard.js';

const SubCat = (props) => {
	const subCats = useStoreState((state) => state.subCats);
	const fetchSub = useStoreActions((actions) => actions.fetchSub);

	const [ newSub, setNewSub ] = useState('');
	const addSub = useStoreActions((actions) => actions.postSub);

	useEffect(() => {
		fetchSub(props.match.params.id);
		//eslint-disable-next-line
	}, []);

	async function handleSubmit() {
		//event.preventDefault();
		const newSubSend = {
			title: newSub,
			mainId: props.match.params.id
		};
		console.log(newSubSend);
		await addSub(newSubSend);
		//window.location.reload(true);
	}

	if (!subCats) {
		return <h1>no subcat store state</h1>;
	}
	// if (subCats.length === 0) {
	// 	return (
	// 		<div>
	// 			<h1>You have no bookmark categories set yet, add some now!</h1>
	// 			<label>
	// 				New Category:{' '}
	// 				<input className="mainCatInput" type="text" onChange={(e) => setNewSub(e.target.value)} />
	// 			</label>
	// 			<button onClick={() => handleSubmit()}>Submit New Category</button>
	// 		</div>
	// 	);
	// }

	return (
		<div>
			<div className="titleAndButton">
				<h1 className="mainPageTitle">Your Bookmark Categories</h1>
				<label>
					New Category:{' '}
					<input className="mainCatInput" type="text" onChange={(e) => setNewSub(e.target.value)} />
				</label>
				<button onClick={() => handleSubmit()}>Submit New Category</button>
			</div>
			<div className="mainCatDiv">{subCats.map((item) => <SubCatCard key={item.id} data={item} />)}</div>;
		</div>
	);
};

export default SubCat;
