import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MainCat from './MainCat.js';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			mainCats: [],
			title: ''
		};
	}

	componentDidMount() {
		axios
			.get(`https://my--bookmarkserver.herokuapp.com/api/main`)
			.then((response) => {
				console.log('get main cat response.data, ', response.data);
				this.setState({ mainCats: response.data });
			})
			.catch((error) => {
				console.log('could not get data, ', error);
			});
	}

	addNewCategory() {
		console.log('addNewCat print state, ', this.state.title);
		if (!this.state.title || !this.state.title.replace(/\s/g, '').length) {
			console.log(`Can't add empty category`);
			window.alert(`Can't add empty category!`);
		} else {
			axios
				.post(`https://my--bookmarkserver.herokuapp.com/api/main/add`, { title: this.state.title })
				.then((response) => {
					console.log(response);
					this.fetchCategories();
				})
				.catch((error) => {
					console.log('error adding new category, ', error);
				});
		}
	}

	removeCategory = (id) => {
		console.log('removing main category');
		axios
			.post(`https://my--bookmarkserver.herokuapp.com/api/main/delete/${id}`)
			.then((response) => {
				console.log(response);
				this.fetchCategories();
			})
			.catch((error) => {
				console.log('error removing category, ', error);
			});
	};

	fetchCategories() {
		axios
			.get(`https://my--bookmarkserver.herokuapp.com/api/main`)
			.then((response) => {
				console.log('get main cat response.data, ', response.data);
				this.setState({ mainCats: response.data });
			})
			.catch((error) => {
				console.log('could not get data, ', error);
			});
	}

	render() {
		if (this.state.mainCats === undefined) {
			return <h1>Loading...</h1>;
		} else if (this.state.mainCats.length === 0) {
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
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</label>
					{/* <input type="submit" value="Submit" onSubmit={this.addNewCategory()} /> */}
					<button onClick={() => this.addNewCategory()}>Submit New Category</button>
				</div>
				<div className="mainCatDiv">
					{this.state.mainCats.map((item) => (
						<MainCat key={item.id} data={item} remove={this.removeCategory} />
					))}
				</div>;
			</div>
		);
	}
}

export default Home;
