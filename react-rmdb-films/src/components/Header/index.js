import React from "react";
import { Link } from "react-router-dom";

import RLogo from "../../images/react-movie-logo.svg";

import { Wrapper, Content, LogoImg} from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/"><LogoImg src={RLogo} alt="rmdb-logo" />;</Link>
        
      </Content>
    </Wrapper>
  );
};

export default Header;
