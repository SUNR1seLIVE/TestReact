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

	let dialogs = [
		{ id: 1, name: 'Дима' },
		{ id: 2, name: 'Андрей' },
		{ id: 3, name: 'Света' },
		{ id: 4, name: 'Саша' },
		{ id: 5, name: 'Виктор' },
		{ id: 6, name: 'Валя' }
	];
	let messages = [
		{ id: 1, message: 'Привет1' },
		{ id: 2, message: 'Привет2' },
		{ id: 3, message: 'Привет3' },
		{ id: 4, message: 'Привет4' },
		{ id: 5, message: 'Привет5' },
		{ id: 6, message: 'Привет6' },
		{ id: 7, message: 'Привет7' }
	];

	let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
	let messagesElements = messages.map( m => <Message massage={m.message} /> );

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={s.messages}>
				{ messagesElements }
			</div>
		</div>
	)
}

export default Dialogs;