import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MainCat from './mainCat/MainCat.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			mainCats: [],
			newCat: ''
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:4000/api/main`)
			.then((response) => {
				console.log('get main cat response.data, ', response.data);
				this.setState({ mainCats: response.data });
			})
			.catch((error) => {
				console.log('could not get data, ', error);
			});
	}

	addNewCategory() {
		axios
			.post(`localhost:4000/api/main/add`, this.state.newCat)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log('error adding new category, ', error);
			});
	}

	render() {
		if (this.state.mainCats.length === 0) {
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
							value={this.state.newCat}
							onChange={(e) => this.setState({ newCat: e.target.value })}
						/>
					</label>
					{/* <input type="submit" value="Submit" onSubmit={this.addNewCategory()} /> */}
					<button onClick={() => this.addNewCategory()}>Submit New Category</button>
				</div>
				<div className="mainCatDiv">{this.state.mainCats.map((item) => <MainCat data={item} />)}</div>;
			</div>
		);
	}
}

export default App;
