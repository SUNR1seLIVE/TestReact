import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
	if(props.users.length === 0){
		props.setUsers([
			{
				id: 1,
				pthotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcjMWgmeXxCbGe-5rgfMDhxrBqnbsQQOjMQ&usqp=CAU',
				followed: false,
				fullName: 'Александр',
				status: 'Задроты рулят!',
				location: {city: 'Санкт-Петербург', country: 'Россия'}
			},
			{
				id: 2,
				pthotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBr7KrD9uT1BlITvoQnS7DG88CvThPGYaoaw&usqp=CAU',
				followed: true,
				fullName: 'Дмитрий',
				status: 'Я и только я!',
				location: {city: 'Москва', country: 'Россия'}
			},
			{
				id: 3,
				pthotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52udqbpzLsPQLGgY_NPgvOka5dRmz4wnrBA&usqp=CAU',
				followed: false,
				fullName: 'Светлана',
				status: 'Красота на высоте!',
				location: {city: 'Киев', country: 'Украина'}
			}
		])
	}
	
	return (
		<div className={styles.usersBlock}>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img className={styles.avatar} src={u.pthotoURL}/>
						</div>
						<div>
							{u.followed
								? <button onClick={ () => { props.unfollow(u.id) } } >UnFollow</button>
								: <button onClick={ () => { props.follow(u.id) } } >Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullname}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users;