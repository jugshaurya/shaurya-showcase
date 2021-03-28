import React, { useState, useEffect } from 'react';
import { Container, Flex } from '../css-in-js/shared';

import { SiteLogo, Nav, NavList, NavItem, Bars, Bar } from './Navbar.styles';
import CollapsedNavbar from './CollapsedNavbar';
import Logo from '../../static/logo/logo-green.svg';

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
  // {
  //   name: 'Blogs',
  //   href: '/blogs',
  // },
  {
    name: 'Experience',
    href: '/#experience',
  },
  {
    name: 'Contacts',
    href: '/#contacts',
  },
];

const ThreeBars = ({ toggleNavbar }) => {
  return (
    <Bars
      fd={'column'}
      role="button"
      tabIndex="0"
      onClick={() => toggleNavbar(true)}
      onKeyPress={() => toggleNavbar(true)}
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <Bar />
      <Bar style={{ transform: 'translateX(6px)' }} />
      <Bar style={{ transform: 'translateX(12px)' }} />
    </Bars>
  );
};

const Navbar = ({ defaultRoute }) => {
  const [active, setActive] = useState(defaultRoute || '/');
  const [collapseHeight, setCollapseHeight] = useState(0);
  const toggleNavbar = (val) =>
    val ? setCollapseHeight(100) : setCollapseHeight(0);

  // TODO: Change navbar Background on Scroll
  useEffect(() => {
    // const navbar = document.getElementById('navbar');
    // const changeNavbarBackground = (e) => {
    //   const Yoffset = Math.round(window.scrollY / 2);
    //   if (Yoffset < 150) {
    //   } else {
    //   }
    // };
    // window.addEventListener('scroll', changeNavbarBackground);
    // return () => {
    //   window.removeEventListener('scroll', changeNavbarBackground);
    // };
  }, []);

  return (
    <>
      {/* hide-on-mobile */}
      <Nav as="nav" className="hide-on-mobile" id="navbar">
        <Container>
          <Flex jc={'space-between'}>
            <SiteLogo src={Logo} alt="site Logo" />
            <NavList>
              {links.map((link) => (
                <NavItem
                  key={link.name}
                  to={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={() => setActive(link.href)}
                >
                  {link.name}
                </NavItem>
              ))}
            </NavList>
          </Flex>
        </Container>
      </Nav>
      {/* show-on-mobile */}
      <Nav as="nav" className="show-on-mobile" id="navbar">
        <Container>
          <Flex jc={'space-between'}>
            <SiteLogo src={Logo} alt="site Logo" />
            <ThreeBars toggleNavbar={toggleNavbar} />
          </Flex>
        </Container>
        <CollapsedNavbar
          toggleNavbar={toggleNavbar}
          height={`${collapseHeight}%`}
          links={links}
          setActive={setActive}
          active={active}
        />
      </Nav>
    </>
  );
};

export default Navbar;
