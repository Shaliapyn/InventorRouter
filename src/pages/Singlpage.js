import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Singlpage = () => {
    const { param } = useParams();
    const [post, setPost] = useState(null);
    console.log(param)
  
    const postURL = `https://jsonplaceholder.typicode.com/posts/${param}`;
  
    useEffect(()=>{
      fetch(postURL)
        .then(post => post.json())
        .then(data => setPost(data))
    },[param])
  return (
    <div>{ post && (
        <> 
            <div  className='link-posts'><Link style={{color:"black"}} to="/posts">Back</Link></div>
            <h1 style={styleH1}>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
        
        }
    </div>
  )
}
const styleH1 = {
  fontSize:"36px", 
  textAlign:"center",
  paddingTop: "20px",
  paddingBottom: "20px",
  fontWeight: "bold"
}

export default Singlpage