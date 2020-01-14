import React, { useState, useEffect, Component } from 'react';
import model from './model';
import { StoreProvider, createStore } from 'easy-peasy';
import axios from 'axios';
import MainCat from './components/MainCat.js';
import Home from './components/Home.js';
import SubCat from './components/SubCat.js';
//import Navigation from './comonents/Navigation.js';
import { Route } from 'react-router-dom';

const store = createStore(model);

function App() {
	return (
		<StoreProvider store={store}>
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/sub/:id" component={SubCat} />
			</div>
		</StoreProvider>
	);
}

export default App;
