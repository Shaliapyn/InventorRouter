import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([])
  
  const postsURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=>{
    fetch(postsURL)
      .then(post => post.json())
      .then(data => setPosts(data))
  },[])

  return (
    <div>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  )
}

export  {Posts}