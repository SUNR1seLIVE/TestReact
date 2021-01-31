const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialisenState = {
	posts: [
		{id: 1, message: 'Привет, как ты?', likesCount: 12},
		{id: 2, message: 'Это мой первый пост', likesCount: 11}
	],
	newPostText: ''
};

const profileReducer = (state = initialisenState, action) => {
	switch (action.type) {
		case ADD_POST:{
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0
			}
			return {...state, posts: [...state.posts, newPost], newPostText: ''}
		}
		case UPDATE_NEW_POST_TEXT:{
			return{...state, newPostText: action.newText}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;