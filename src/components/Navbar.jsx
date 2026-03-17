import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">Ieungsa</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>소개</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>프로젝트</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>연락처</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
