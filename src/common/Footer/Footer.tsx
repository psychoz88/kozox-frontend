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

  const navigateTo = useCallback(
    (route: string) => {
      navigate(route);
    },
    [navigate],
  );

  return (
    <>
      <FooterContainer bottomOffset='40px' id='footer'>
        <Container>
          <FooterRow>
            {/* Left block */}
            <FooterBlock>
              <StyledNavLink
                onClick={() => navigateTo(Routes.mainLanding)}
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>© Kozox {new Date().getFullYear()}</span>
              </StyledNavLink>
            </FooterBlock>

            {/* Center block */}
            <CentralBlock isMobile={isMobile}>
              <FooterLinkBlock>
                <StyledNavLink onClick={() => navigateTo(Routes.privacyPolicy)}>
                  Privacy Policy
                </StyledNavLink>
              </FooterLinkBlock>
              <FooterLinkBlock>
                <StyledNavLink onClick={() => navigateTo(Routes.cookiePolicy)}>
                  Cookie Policy
                </StyledNavLink>
              </FooterLinkBlock>
              <FooterLinkBlock>
                <StyledNavLink
                  onClick={() => navigateTo(Routes.termsAndConditions)}
                >
                  Terms & Conditions
                </StyledNavLink>
              </FooterLinkBlock>
            </CentralBlock>

            {/* Right block */}
            <SocialLinks white center={isMobile} />
          </FooterRow>
        </Container>
      </FooterContainer>

      {/* {isNavbarOnMobile && <Navbar />} */}
    </>
  );
};

export default Footer;
