import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidabarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon size={25} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="hakkinda" onClick={toggle}>Hakkinda</SidebarLink>
          <SidebarLink to="kesfet" onClick={toggle}>Keşfet</SidebarLink>
          <SidebarLink to="servisler" onClick={toggle}>Servisler</SidebarLink>
          <SidebarLink to="uye-ol" onClick={toggle}>Uye Ol</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
