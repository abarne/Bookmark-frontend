import React, { useState, useEffect, Component, useParams } from 'react';
import axios from 'axios';
import MainCat from './MainCat.js';
import SubCatCard from './SubCat.js';

class SubCat extends Component {
	constructor() {
		super();
		this.state = {
			subCats: [],
			title: '',
			loaded: false
		};
	}

	componentDidMount() {
		if (!this.state.loaded) {
			this.setState({ loaded: true });
			this.setSubCats();
		}
		console.log('sug cats component mounting');
	}

	setSubCats() {
		axios
			.get(`https://my--bookmarkserver.herokuapp.com/api/sub`)
			.then((response) => {
				console.log('get sub cat response.data, ', response.data);
				this.setState({ subCats: response.data });
			})
			.catch((error) => {
				console.log('could not get data, ', error);
			});
	}

	addNewCategory() {
		//let { id } = useParams();
		console.log('add new sub cat, this is match.params.id, ', this.props.match.params.id);
		// axios
		// 	.post(`https://my--bookmarkserver.herokuapp.com/api/sub/add`, {
		// 		title: this.state.title,
		// 		MainId: this.props.match.params.id
		// 	})
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		console.log('error adding new category, ', error);
		// 	});
	}

	render() {
		// if (this.state.subCats.length === 0) {
		// 	return (
		// 		<div>
		// 			<h1>You have no bookmark sub categories set yet, add one now!</h1>
		// 			<label>
		// 				New Category:{' '}
		// 				<input
		// 					className="mainCatInput"
		// 					type="text"
		// 					value={this.state.title}
		// 					onChange={(e) => this.setState({ title: e.target.value })}
		// 				/>
		// 			</label>
		// 			<button onClick={() => this.addNewCategory()}>Submit New Category</button>
		// 		</div>
		// 	);
		// }

		return (
			<div>
				<div className="titleAndButton">
					<h1 className="mainPageTitle">Your Bookmark Categories</h1>
					<label>
						New Category:{' '}
						<input
							className="mainCatInput"
							type="text"
							value={this.state.title}
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</label>
					{/* <input type="submit" value="Submit" onSubmit={this.addNewCategory()} /> */}
					<button onClick={() => this.addNewCategory()}>Submit New Category</button>
				</div>
				<div className="mainCatDiv">
					{this.state.subCats.map((item) => <SubCatCard key={item.id} data={item} />)}
				</div>;
			</div>
		);
	}
}

export default SubCat;
