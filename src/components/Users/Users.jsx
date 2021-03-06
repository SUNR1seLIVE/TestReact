import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/images.png'

const Users = (props) => {
	if(props.users.length === 0){
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { props.setUsers(response.data.items) })
	}

	return (
		<div className={styles.usersBlock}>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img className={styles.avatar} src={u.photos.small !=null ? u.photos.small : userPhoto}/>
						</div>
						<div>
							{u.followed
								? <button onClick={ () => { props.unfollow(u.id) } } >UnFollow</button>
								: <button onClick={ () => { props.follow(u.id) } } >Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users;