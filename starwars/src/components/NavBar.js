import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Nav1 = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Star Wars Character API</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.starwars.com/" target="blank_">
                Star Wars
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu right>
              <NavLink href="https://twitter.com/search?q=star+wars&ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5E" target="blank_">
                 Twitter
              </NavLink>
              <NavLink href="https://www.instagram.com/starwars/?hl=en" target="blank_">
                Instagram
              </NavLink>
                <DropdownItem divider />
                <NavLink href="https://giphy.com/gifs/star-wars-the-force-awakens-bb8-8oXYKAaKgAroA" target="blank_">
                Giphy
              </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Nav1;
