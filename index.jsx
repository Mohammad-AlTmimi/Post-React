import "./index.css";
import React, { useState, useRef } from "react";
const Post = ({ post }) => {
  const [comments, setComments] = useState([]);

  function addComment() {
    const newComment = document.getElementById("Comment").value;
    setComments(prevComments => [...prevComments, newComment]);
  }
  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <div>
            <div className="post-author">{post.author}</div>
            <div className="post-date">{post.date}</div>
          </div>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="post-image-container">
        </div>
        <div class="post-actions">
          <div>
            <div
              onClick={() => {
                alert("write function to increase the Like ");
              }}
            >
            Like : {post.like}
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                alert("write function to add comment the Like ");
              }}
            >
              Comment : {post.comment}
            </div>
          </div>
        </div>
      </div>

      <div className="post-container comments-post">
        <div className="display-comments">
          <div>
            <img className="post-avatar" src={post.profile} alt="Avatar" />
          </div>
          <div className="comment-form">
            <h4>Comments: </h4>
            {comments.map((comment, index) => (
              <div key={index}>{comment}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="post-container comment-post">
        <div className="comment-form">
          <input
            id="Comment"
            className="comment-input"
            type="text"
            placeholder="Write a comment..."
          />
          <button className="comment-button" type="button" onClick={() => addComment()}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Post;