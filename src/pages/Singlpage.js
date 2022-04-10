import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Singlpage = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const backFunc = () => navigate("/posts");

  const postURL = `https://jsonplaceholder.typicode.com/posts/${param}`;

  useEffect(() => {
    fetch(postURL)
      .then((post) => post.json())
      .then((data) => setPost(data));
  }, [param]);
  return (
    <div>
      {post && (
        <>
          <button className="btn-back" onClick={backFunc}>
            Back
          </button>
          <h1 style={styleH1}>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
export const styleH1 = {
  fontSize: "36px",
  textAlign: "center",
  paddingTop: "20px",
  paddingBottom: "20px",
  fontWeight: "bold",
};

export default Singlpage;
