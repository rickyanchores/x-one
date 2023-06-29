import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const navList = [
    {
      name: "Home",
      href: "#home"
    },
    {
      name: "Services",
      href: "#services"
    },
    {
      name: "Gallery",
      href: "#gallery"
    }
  ];

  return (
    <div className="Nav  flex justify-between items-center">
      <ul className="navlinks flex flex-col justify-around items-center sm:flex-row">
        {navList.map((link) => (
          <li className="link p-5" key={link.name}>
            <Link smooth to={link.href} className="block sm:inline">{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
