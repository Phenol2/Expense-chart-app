import React from 'react';
import { StyledHeader, Balance, Logo } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Balance>
        <span>My Balance</span>
        <div>$921.48</div>
      </Balance>
      <Logo>
        <div></div>
      </Logo>
    </StyledHeader>
  );
};

export default Header;
