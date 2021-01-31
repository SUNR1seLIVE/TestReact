const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialisenState = {
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
	],
	newMessageBody:''
};

const dialogsReducer = (state = initialisenState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';			
			state.messages.push({id: 6, message: body});
			return state;
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;