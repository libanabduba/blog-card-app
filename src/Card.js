// Card.js

import React, { useState } from 'react';
import './Card.css';

export default function Card({ title, author, content }) {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLikeClick = () => {
    setLikes(likes + 1);


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>{content}</p>

      {/* Like Button and Count */}
      <div className="like-section">
        <button className="like-button" onClick={handleLikeClick}>
          Like
        </button>
        <span className="like-count">Likes: {likes}</span>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <h3>Comments</h3>
        <textarea
          rows="4"
          cols="50"
          placeholder="Add a comment..."
          className="comment-input"
          value={comment}
          onChange={handleCommentChange}
        />
        <button className="add-comment-button" onClick={handleAddComment}>
          Add Comment
        </button>
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
}