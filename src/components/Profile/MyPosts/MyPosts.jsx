import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post message='Привет, как ты?' likeCount='15' />
				<Post message='Это мой первый пост' likeCount='20' />
			</div>
		</div>
	)
}

export default MyPosts;