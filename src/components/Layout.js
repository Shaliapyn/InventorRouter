import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="navigation-block">
        <header className="navigation">
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/posts">Posts</Link>
        </header>
      </div>
      <main className="outlet-container">
        <Outlet />
      </main>
      

      <footer className="footer">FOOTER</footer>
    </>
  );
};

export default Layout;
