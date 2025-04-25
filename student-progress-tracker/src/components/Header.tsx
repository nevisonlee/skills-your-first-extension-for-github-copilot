import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Student Progress Tracker</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/students">Students</a></li>
          <li><a href="/teachers">Teachers</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;