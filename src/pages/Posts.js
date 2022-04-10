import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { styleH1 } from './Singlpage';

const Posts = () => {
  
  const [posts, setPosts] = useState([])
  console.log(useLocation())
  const postsURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=>{
    fetch(postsURL)
      .then(post => post.json())
      .then(data => setPosts(data))
  },[])

  return (
    <div>
      <h2 style={styleH1}>POSTS</h2>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  )
}

export  {Posts}