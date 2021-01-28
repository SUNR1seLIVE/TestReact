import s from './Profile.module.css';

const Profile = () => {
	return <div className={s.content}>
		<div>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEt1hdouHY3OO6LqQrwJqIDp0By5iwnbyHQ&usqp=CAU' />
		</div>
		<div>
			Ava + description
		</div>
		<div>
			My posts
			<div>
				New post
			</div>
			<div className={s.posts}>
				<div className={s.item}>
					Post 1
				</div>
				<div className={s.item}>
					Post 2
				</div>
			</div>
		</div>
	</div>;
}

export default Profile