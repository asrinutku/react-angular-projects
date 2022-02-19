import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink to="/signin">Hakkimizda</FooterLink>
              <FooterLink to="/signin">Servisler</FooterLink>
              <FooterLink to="/signin">Keşfet</FooterLink>
              <FooterLink to="/signin">Üye Ol</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink to="/signin">Hakkimizda</FooterLink>
              <FooterLink to="/signin">Servisler</FooterLink>
              <FooterLink to="/signin">Keşfet</FooterLink>
              <FooterLink to="/signin">Üye Ol</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink to="/signin">Hakkimizda</FooterLink>
              <FooterLink to="/signin">Servisler</FooterLink>
              <FooterLink to="/signin">Keşfet</FooterLink>
              <FooterLink to="/signin">Üye Ol</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Footer</FooterLinkTitle>
              <FooterLink to="/signin">Hakkimizda</FooterLink>
              <FooterLink to="/signin">Servisler</FooterLink>
              <FooterLink to="/signin">Keşfet</FooterLink>
              <FooterLink to="/signin">Üye Ol</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
