let store = {
	_state: {
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
	},
	_callSubscriber() {
		console.log('State changed');
	},
	
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action){
		if(action.type === 'ADD-POST'){
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}else if(action.type === 'UPDATE-NEW-POST-TEXT'){
			this._state.profilePage.newPostText = action.newText;	
			this._callSubscriber(this._state);
		}
	}
}

export default store;
window.store = store;
//store - OOP