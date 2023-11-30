import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';

import SocialLinks from 'components/SocialLinks/SocialLinks';

import {Routes} from 'constants/routes';
import {useAppSelector} from 'store/hooks';

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
            <SocialLinks white />
          </FooterRow>
        </Container>
      </FooterContainer>

      {/* {isNavbarOnMobile && <Navbar />} */}
    </>
  );
};

export default Footer;
