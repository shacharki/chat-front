import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/media">Media Gallery</Link></li>
        <li><Link to="/documents">Document Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;