import { rerenderEntireTree } from "./../render";

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Привет, как ты?', likesCount: 12},
			{id: 2, message: 'Это мой первый пост', likesCount: 11}
		]
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Дима' },
			{ id: 2, name: 'Андрей' },
			{ id: 3, name: 'Света' },
			{ id: 4, name: 'Саша' },
			{ id: 5, name: 'Виктор' },
			{ id: 6, name: 'Валя' }
		],
		messages: [
			{ id: 1, message: 'Привет1' },
			{ id: 2, message: 'Привет2' },
			{ id: 3, message: 'Привет3' },
			{ id: 4, message: 'Привет4' },
			{ id: 5, message: 'Привет5' },
			{ id: 6, message: 'Привет6' }
		]
	},
	sidebar: {}
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);

	rerenderEntireTree(state);
}

export default state;