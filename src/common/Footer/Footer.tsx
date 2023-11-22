import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {Routes} from 'constants/routes';
import {useAppSelector} from 'store/hooks';

import linkedin from 'images/icons/linkedin.svg';
import youtube from 'images/icons/youtube.svg';
import {
  FooterRow,
  FooterBlock,
  FooterContainer,
  FooterLinkBlock,
  StyledNavLink,
  Container,
  CentralBlock,
} from './Footer.styles';

const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const onMain = useCallback(() => {
    navigate(Routes.mainLanding);
  }, [navigate]);
  const onPrivacyPolicy = useCallback(() => {
    navigate(Routes.privacyPolicy);
  }, [navigate]);
  const onCookiePolicy = useCallback(() => {
    navigate(Routes.cookiePolicy);
  }, [navigate]);

  return (
    <>
      <FooterContainer bottomOffset='40px' id='footer'>
        <Container>
          <FooterRow>
            {/* Left block */}
            <FooterBlock>
              <StyledNavLink
                onClick={onMain}
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>© Kozox {new Date().getFullYear()}</span>
              </StyledNavLink>
            </FooterBlock>

            {/* Center block */}
            <CentralBlock isMobile={isMobile}>
              <FooterLinkBlock>
                <StyledNavLink onClick={onPrivacyPolicy}>
                  Privacy Policy
                </StyledNavLink>
              </FooterLinkBlock>
              <FooterLinkBlock>
                <StyledNavLink onClick={onCookiePolicy}>
                  Cookie Policy
                </StyledNavLink>
              </FooterLinkBlock>
            </CentralBlock>

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
