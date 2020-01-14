import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MainCat from './MainCat.js';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';

const Home = () => {
	const mainCats = useStoreState((state) => state.mainCats);
	const add = useStoreActions((actions) => actions.addMain);
	const fetchMain = useStoreActions((actions) => actions.fetchMain);

	const [ newMain, setNewMain ] = useState('');
	const addMain = useStoreActions((actions) => actions.postMain);

	useEffect(() => {
		fetchMain();
		//eslint-disable-next-line
	}, []);

	function handleSubmit() {
		//event.preventDefault();
		addMain(newMain);
	}

	if (mainCats.length === 0) {
		return <h1>You have no bookmark categories set yet</h1>;
	}

	return (
		<div>
			<div className="titleAndButton">
				<h1 className="mainPageTitle">Your Bookmark Categories</h1>
				<label>
					New Category:{' '}
					<input className="mainCatInput" type="text" onChange={(e) => setNewMain(e.target.value)} />
				</label>
				<button onClick={() => handleSubmit()}>Submit New Category</button>
			</div>
			<div className="mainCatDiv">{mainCats.map((item) => <MainCat key={item.id} data={item} />)}</div>;
		</div>
	);

	// return (
	// 	<div>
	// 		<div className="titleAndButton">
	// 			<h1 className="mainPageTitle">Your Bookmark Categories</h1>
	// 			<label>
	// 				New Category: <input className="mainCatInput" type="text" />
	// 			</label>
	// 			<input type="submit" value="Submit" />
	// 			<button>Submit New Category</button>
	// 		</div>
	// 		<div className="mainCatDiv">{mainCats.map((item) => <MainCat key={item.id} data={item} />)}</div>;
	// 	</div>
	// );
};

// class Home extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			mainCats: [],
// 			title: ''
// 		};
// 	}

// 	componentDidMount() {
// 		axios
// 			.get(`https://my--bookmarkserver.herokuapp.com/api/main`)
// 			.then((response) => {
// 				console.log('get main cat response.data, ', response.data);
// 				this.setState({ mainCats: response.data });
// 			})
// 			.catch((error) => {
// 				console.log('could not get data, ', error);
// 			});
// 	}

// 	addNewCategory() {
// 		console.log('addNewCat print state, ', this.state.title);
// 		axios
// 			.post(`https://my--bookmarkserver.herokuapp.com/api/main/add`, { title: this.state.title })
// 			.then((response) => {
// 				console.log(response);
// 			})
// 			.catch((error) => {
// 				console.log('error adding new category, ', error);
// 			});
// 	}

// 	render() {
// 		if (this.state.mainCats.length === 0) {
// 			return <h1>You have no bookmark categories set yet</h1>;
// 		}

// 		return (
// 			<div>
// 				<div className="titleAndButton">
// 					<h1 className="mainPageTitle">Your Bookmark Categories</h1>
// 					<label>
// 						New Category:{' '}
// 						<input
// 							className="mainCatInput"
// 							type="text"
// 							value={this.state.newCat}
// 							onChange={(e) => this.setState({ title: e.target.value })}
// 						/>
// 					</label>
// 					{/* <input type="submit" value="Submit" onSubmit={this.addNewCategory()} /> */}
// 					<button onClick={() => this.addNewCategory()}>Submit New Category</button>
// 				</div>
// 				<div className="mainCatDiv">
// 					{this.state.mainCats.map((item) => <MainCat key={item.id} data={item} />)}
// 				</div>;
// 			</div>
// 		);
// 	}
// }

export default Home;
