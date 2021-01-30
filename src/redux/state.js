let rerenderEntireTree;

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Привет, как ты?', likesCount: 12},
			{id: 2, message: 'Это мой первый пост', likesCount: 11}
		],
		newPostText: ''
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

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;	
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;

//store - OOP