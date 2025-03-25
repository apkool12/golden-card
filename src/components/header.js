import React from 'react';
import '../styles/header.css';

const Header = ({ toggleAdminPage }) => {
  return (
    <div className="header">
      <h1>BINARY</h1>
      <button 
        className="admin-toggle-btn" 
        onClick={toggleAdminPage}
      >
        관리자
      </button>
    </div>
  );
};

export default Header;