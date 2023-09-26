import React from 'react';

import {
  FooterRow,
  FooterBlock,
  FooterContainer,
  FooterLinkBlock,
  StyledNavLink,
  Container,
} from './Footer.styles';
import {fontWeightBold, fontWeightExtraBold} from 'constants/styleVars';

const Footer = () => {
  return (
    <>
      <FooterContainer bottomOffset='40px' id='footer'>
        <Container>
          <FooterRow>
            {/* Left block */}
            <FooterBlock>
              <StyledNavLink
                to='https://www.google.com.ua/'
                target='_blank'
                rel='noreferrer noopener'
                fontWeight={fontWeightBold}
              >
                <span>© Kozox {new Date().getFullYear()}</span>
              </StyledNavLink>
            </FooterBlock>

            {/* Center block */}
            <FooterLinkBlock>
              <StyledNavLink
                to='https://www.google.com.ua/'
                fontWeight={fontWeightExtraBold}
              >
                Privacy Policy
              </StyledNavLink>

              <StyledNavLink
                to='https://www.google.com.ua/'
                fontWeight={fontWeightExtraBold}
              >
                Terms and conditions
              </StyledNavLink>
            </FooterLinkBlock>

            {/* Right block */}
            <FooterBlock>
              {/* <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='LinkedIn' />
              </a>

              <a
                href='https://www.youtube.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='YouTube' />
              </a> */}
            </FooterBlock>
          </FooterRow>
        </Container>
      </FooterContainer>

      {/* {isNavbarOnMobile && <Navbar />} */}
    </>
  );
};

export default Footer;
