import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img className={s.imgTest} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEt1hdouHY3OO6LqQrwJqIDp0By5iwnbyHQ&usqp=CAU' />
			</div>
			<div className={s.descriptionBlock}>
				Ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;