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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name='Test1' id='1'/>
				<DialogItem name='Test2' id='2'/>
				<DialogItem name='Test3' id='3'/>
				<DialogItem name='Test4' id='4'/>
				<DialogItem name='Test5' id='5'/>
				<DialogItem name='Test6' id='6'/>
			</div>
			<div className={s.messages}>
				<Message massage='Привет1' />
				<Message massage='Привет2' />
				<Message massage='Привет3' />
			</div>
		</div>
	)
}

export default Dialogs;