import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
  MobıleIcon,
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">AUY</NavLogo>
          <MobıleIcon onClick={toggle}>
            <FaBars size={25} />
          </MobıleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="hakkinda">Hakkında</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="kesfet">Keşfet</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="servisler">Servisler</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="uye-ol">Üye Ol</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/signin">Giris Yap</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
