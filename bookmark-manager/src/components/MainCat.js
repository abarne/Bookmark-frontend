import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';

const MainCat = (props) => {
	const removeMainCat = useStoreActions((actions) => actions.removeMain);

	return (
		<div className="mainCatCard" onDoubleClick={() => removeMainCat(props.data.id)}>
			<Link to={`/sub/${props.data.id}`}>
				<h1 className="mainCatTitle">{props.data.title}</h1>
			</Link>
		</div>
	);
};

export default MainCat;
