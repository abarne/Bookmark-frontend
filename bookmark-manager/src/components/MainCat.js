import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MainCat = (props) => {
	return (
		<div className="mainCatCard" onDoubleClick={() => props.remove(props.data.id)}>
			<Link to={`/sub/${props.data.id}`}>
				<h1 className="mainCatTitle">{props.data.title}</h1>
			</Link>
		</div>
	);
};

export default MainCat;
