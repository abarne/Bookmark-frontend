import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MainCat from './components/MainCat.js';
import Home from './components/Home.js';
import SubCat from './components/SubCat.js';
//import Navigation from './comonents/Navigation.js';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/sub/:id" component={SubCat} />
			</div>
		);
	}
}

export default App;
