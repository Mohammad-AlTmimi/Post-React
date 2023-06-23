import React, { useState } from 'react';
import Post from './index.jsx'

class PostClass {
  constructor(author, date, content) {
    this.author = author;
    this.date = date.toLocaleString();
    this.content = content;
    this.like = 0;
  }
}

function App() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    const Name = ["Mohammad", "Ali", "Hassan", "Khalil", "Hamza", "Ala", "Hussam"];
    const ind = Math.floor(Math.random() * 7);
    const date = new Date();
    const content = document.getElementById('Content').value;
    const newPost = new PostClass(Name[ind], date, content);
    setPosts(prevPosts => [...prevPosts, newPost]);
  }

  return (
    <center>
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <input type='text' className='comment-form' id='Content' />
        <input type='submit' className='comment-form' onClick={addPost} />

        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </center>
  );
}

export default App;
