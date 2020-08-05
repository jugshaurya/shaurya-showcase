import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/logo/logo-green.svg';
import '../../styles/navbar.scss';
import CollapsedNavbar from './CollapsedNavbar';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Stats',
    href: '/#stats',
  },
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'Skills',
    href: '/#skills',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Experience',
    href: '/#experience',
  },
  {
    name: 'Contacts',
    href: '/#contacts',
  },
];

const Navbar = ({ defaultRoute }) => {
  const [active, setActive] = useState(defaultRoute || '/');
  const [collapseState, setCollapsedState] = useState({
    isCollapsedNavOpen: false,
    height: 0,
  });

  const toggleNavbar = (val) => {
    setCollapsedState({
      ...collapseState,
      isCollapsedNavOpen: val,
      height: val ? 100 : 0,
    });
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links-list">
          {links.map((link) => (
            <Link
              to={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={() => setActive(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-cross" onClick={() => toggleNavbar(true)}>
        &#9776;
      </div>
      <CollapsedNavbar
        toggleNavbar={toggleNavbar}
        height={`${collapseState.height}%`}
        links={links}
        setActive={setActive}
        active={active}
      />
    </nav>
  );
};

export default Navbar;