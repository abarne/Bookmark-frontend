import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function mainCat(props) {
	return (
		<Link to={`/sub/${props.data.id}`}>
			<h1 className="mainCatTitle">{props.data.title}</h1>
		</Link>
	);
}

export default mainCat;
