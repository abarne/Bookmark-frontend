import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MainCat from './MainCat.js';

import SubCatCard from './SubCatCard.js';

class SubCat extends Component {
	constructor() {
		super();
		this.state = {
			subCats: [],
			title: ''
		};
	}

	render() {
		return (
			<div>
				<h1>Work in progress!</h1>
			</div>
		);
	}
}

export default SubCat;
