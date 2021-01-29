import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let posts = [
		{id: 1, message: 'Привет, как ты?', likesCount: 12},
		{id: 2, message: 'Это мой первый пост', likesCount: 11}
	];

	let postsElement = posts.map( p => <Post message={p.message} likeCount={p.likesCount} /> );

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{ postsElement }
			</div>
		</div>
	)
}

export default MyPosts;