import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';

const Posts = (props) => {
  return (
    <div className="posts">
      <h3>Posts</h3>
      <div className="new-post">New post</div>
      <textarea></textarea>
      <button >Add</button>
      <Post  message="Hello, how are you"/>
      <Post  message={`It's my first post`}/>
    </div>
  )
}

export default Posts;