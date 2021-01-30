import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCriator, addPostActionCriator} from './../../../redux/state'

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCriator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCriator(text);
		props.dispatch(action);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;