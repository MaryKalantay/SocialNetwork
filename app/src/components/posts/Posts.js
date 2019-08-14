import React from 'react';
import styles from './Posts.module.css';

const Posts = () => {
  return (
    <div className="posts">
      <h3>Posts</h3>
      <div className="new-post">New post</div>
      <p className={styles.item}>it is post</p>
      <p className={styles.item}>it is post</p>
      <p className={styles.item}>it is post</p>
    </div>
  )
}

export default Posts;