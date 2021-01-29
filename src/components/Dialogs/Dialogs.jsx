import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.massage}>{props.massage}</div>
	)
}

const Dialogs = (props) => {

	let dialogsData = [
		{ id: 1, name: 'Дима' },
		{ id: 2, name: 'Андрей' },
		{ id: 3, name: 'Света' },
		{ id: 4, name: 'Саша' },
		{ id: 5, name: 'Виктор' },
		{ id: 6, name: 'Валя' }
	];
	let messageData = [
		{ id: 1, message: 'Привет1' },
		{ id: 2, message: 'Привет2' },
		{ id: 3, message: 'Привет3' },
		{ id: 4, message: 'Привет4' },
		{ id: 5, message: 'Привет5' },
		{ id: 6, message: 'Привет6' }
	];

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
			</div>
			<div className={s.messages}>
				<Message massage={messageData[0].message} />
				<Message massage={messageData[1].message} />
				<Message massage={messageData[2].message} />
			</div>
		</div>
	)
}

export default Dialogs;