import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navList = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "Gallery",
      href: "/gallery"
    }
  ];

  return (
    <div className="Nav  flex justify-between items-center">
      <ul className="navlinks flex flex-col justify-around items-center sm:flex-row">
        {navList.map((link) => (
          <li className="link p-5" key={link.name}>
            <Link to={link.href} className="block sm:inline">{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
