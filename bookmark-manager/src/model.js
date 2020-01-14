import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export default {
	mainCats: [],
	subCats: [],
	links: [],
	//thunks
	fetchMain: thunk(async (actions) => {
		const response = await fetch(`https://my--bookmarkserver.herokuapp.com/api/main`);
		const main = await response.json();
		actions.setMain(main);
	}),
	fetchSub: thunk(async (actions) => {
		const response = await fetch(`https://my--bookmarkserver.herokuapp.com/api/sub`);
		const sub = await response.json();
		actions.setSub(sub);
	}),
	fetchLink: thunk(async (actions) => {
		const response = await fetch(`https://my--bookmarkserver.herokuapp.com/api/link`);
		const link = await response.json();
		actions.setMain(link);
	}),
	postMain: action((actions, newMain) => {
		axios
			.post(`https://my--bookmarkserver.herokuapp.com/api/main/add`, { title: newMain })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log('error adding new category, ', error);
			});
		console.log('new main added');
	}),

	//actions
	setMain: action((state, main) => {
		state.mainCats = main;
	}),
	setSub: action((state, sub) => {
		state.subCats = sub;
	}),
	setLink: action((state, link) => {
		state.links = link;
	})
};
