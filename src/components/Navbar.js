import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/pins">Pins</Link>
        </li>
        <li>
          <Link to="/category/posters">Posters</Link>
        </li>
        <li>
          <Link to="/category/art-supplies">Art Supplies</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;