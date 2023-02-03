import React from 'react';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <span>Total this month</span>
        <h5>$478.33</h5>
      </div>
      <div>
        <h6>+2.4%</h6>
        <span>from last month</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
