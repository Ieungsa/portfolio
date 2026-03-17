import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Ieungsa</Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/team" onClick={() => setIsOpen(false)}>팀원 소개</Link></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>프로젝트</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>연락처</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
