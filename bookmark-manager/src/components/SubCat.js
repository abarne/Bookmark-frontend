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
		await addSub(newSub);
		//window.location.reload(true);
	}

	if (subCats.length === 0) {
		return <h1>You have no bookmark categories set yet</h1>;
	}

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
