import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function SubCatCard(props) {
	return <h1 className="mainCatTitle">{props.data.title}</h1>;
}

export default SubCatCard;
