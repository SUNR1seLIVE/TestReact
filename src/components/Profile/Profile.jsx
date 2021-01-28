import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEt1hdouHY3OO6LqQrwJqIDp0By5iwnbyHQ&usqp=CAU' />
			</div>
			<div>
				Ava + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;