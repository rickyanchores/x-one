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
    <div className="Nav bg-slate-800 flex justify-between items-center">
      <div className="logo">Nav</div>
      <ul className="navlinks">
        {navList.map((link) => (
          <li className="link" key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
