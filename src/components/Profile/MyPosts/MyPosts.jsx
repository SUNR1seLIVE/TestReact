import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from './../../../redux/profile-reducer'

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Введите текст поста!' />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;