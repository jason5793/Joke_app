import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">😂 Joke App</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#" className="nav-item">Home</a></li>
          <li><a href="#" className="nav-item">Jokes</a></li>
          <li><a href="#" className="nav-item">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

