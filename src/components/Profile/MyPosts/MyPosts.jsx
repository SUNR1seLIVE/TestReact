import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElement = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount} /> );

	let newPostElement = React.createRef();

	let addPost = () => {
		let test = newPostElement.current.value;
		props.addPost(test);
		newPostElement.current.value = '';
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={ addPost }>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{ postsElement }
			</div>
		</div>
	)
}

export default MyPosts;