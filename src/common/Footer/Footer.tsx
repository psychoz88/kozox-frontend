import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';

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

const Footer = () => {
  const navigate = useNavigate();

  const onMainClick = useCallback(() => {
    navigate(Routes.mainLanding);
  }, [navigate]);

  const onPrivacyPolicyClick = useCallback(() => {
    navigate(Routes.privacyPolicy);
  }, [navigate]);

  return (
    <>
      <FooterContainer bottomOffset='40px' id='footer'>
        <Container>
          <FooterRow>
            {/* Left block */}
            <FooterBlock>
              <StyledNavLink
                onClick={onMainClick}
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>© Kozox {new Date().getFullYear()}</span>
              </StyledNavLink>
            </FooterBlock>

            {/* Center block */}
            <FooterLinkBlock>
              <StyledNavLink onClick={onPrivacyPolicyClick}>
                Privacy Policy
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
