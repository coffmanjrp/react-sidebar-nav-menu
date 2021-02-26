import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bar">
          <FaBars />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
