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
	fetchSub: thunk(async (actions, subId) => {
		console.log('subId console log, ', subId);
		const response = await fetch(`https://my--bookmarkserver.herokuapp.com/api/sub`);
		const sub = await response.json();
		actions.setSub(sub);
	}),
	fetchLink: thunk(async (actions) => {
		const response = await fetch(`https://my--bookmarkserver.herokuapp.com/api/link`);
		const link = await response.json();
		actions.setMain(link);
	}),
	postMain: action(async (actions, newMain) => {
		await axios
			.post(`https://my--bookmarkserver.herokuapp.com/api/main/add`, { title: newMain })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log('error adding new category, ', error);
			});
		console.log('new main added');
		//window.location.reload(true);
	}),
	removeMain: action((actions, mainID) => {
		axios
			.post(`https://my--bookmarkserver.herokuapp.com/api/main/delete/${mainID}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log('error removing main category, ', error);
			});
		console.log('main category removed');
		//actions.fetchMain();
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
