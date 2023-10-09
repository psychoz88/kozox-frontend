import React from 'react';

import linkedin from 'images/icons/linkedin.svg';
import youtube from 'images/icons/youtube.svg';

import {
  FooterRow,
  FooterBlock,
  FooterContainer,
  FooterLinkBlock,
  StyledNavLink,
  Container,
} from './Footer.styles';
import {fontWeightNormal} from 'constants/styleVars';

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
                fontWeight={fontWeightNormal}
              >
                <span>© Kozox {new Date().getFullYear()}</span>
              </StyledNavLink>
            </FooterBlock>

            {/* Center block */}
            <FooterLinkBlock>
              <StyledNavLink
                to='https://www.google.com.ua/'
                fontWeight={fontWeightNormal}
              >
                Privacy Policy
              </StyledNavLink>

              <StyledNavLink
                to='https://www.google.com.ua/'
                fontWeight={fontWeightNormal}
              >
                Terms and conditions
              </StyledNavLink>
            </FooterLinkBlock>

            {/* Right block */}
            <FooterBlock>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img src={linkedin} alt='LinkedIn' />
              </a>

              <a
                href='https://www.youtube.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img src={youtube} alt='YouTube' />
              </a>
            </FooterBlock>
          </FooterRow>
        </Container>
      </FooterContainer>

      {/* {isNavbarOnMobile && <Navbar />} */}
    </>
  );
};

export default Footer;
