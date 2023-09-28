import React, {useRef} from 'react';
import {useAppSelector} from 'store/hooks';

import {
  StyledWrapper,
  MobileContent,
  StyledColLeft,
  StyledColLeftMain,
  StyledColRight,
  StyledColLeftHeader,
  StyledFooter,
  StyledSubtitle,
  StyledTitle,
  StyledTitleBox,
} from './TwoColumns.styles';
import {TwoColumnsContentProps} from './types';

export function TwoColumnsContent({
  title,
  subTitle,
  isRightColumnBeforeLeft = false,
  isRightColumnFullHeight = false,
  isLeftColumnFixed = false,
  colLeft,
  colRight,
  footer,
  isRefreshScroll,
  customPadding,
  gridColumns,
  leftColumnStyles,
  rightColumnStyles,
}: TwoColumnsContentProps) {
  const isDesktop = useAppSelector(({app}) => app.deviceType.isDesktop);
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);

  const HeaderBlock = () => (
    <StyledColLeftHeader>
      <StyledTitleBox>
        <StyledTitle>{title}</StyledTitle>

        {subTitle && <StyledSubtitle>{subTitle}</StyledSubtitle>}
      </StyledTitleBox>
    </StyledColLeftHeader>
  );

  const selectedLeftColumn = useRef<HTMLElement>(null);
  const selectedRightColumn = useRef<HTMLElement>(null);
  const selectedMobileWrapper = useRef<HTMLElement>(null);

  if (isRefreshScroll) {
    if (selectedLeftColumn.current !== null) {
      selectedLeftColumn.current.scrollTo(0, 0);
    }

    if (selectedRightColumn.current !== null) {
      selectedRightColumn.current.scrollTo(0, 0);
    }

    if (selectedMobileWrapper.current !== null && !isDesktop) {
      selectedMobileWrapper.current.scrollTo(0, 0);
    }
  }

  return (
    <>
      <StyledWrapper
        isHasFooter={!!footer}
        isMobile={isMobile}
        customPadding={customPadding}
        gridColumns={gridColumns}
      >
        {isDesktop ? (
          <>
            <StyledColLeft
              ref={selectedLeftColumn as React.RefObject<HTMLDivElement>}
            >
              <HeaderBlock />
              <StyledColLeftMain leftColumnStyles={leftColumnStyles}>
                {colLeft}
              </StyledColLeftMain>
            </StyledColLeft>

            <StyledColRight
              ref={selectedRightColumn as React.RefObject<HTMLDivElement>}
              isRightColumnFullHeight={isRightColumnFullHeight}
              rightColumnStyles={rightColumnStyles}
            >
              {colRight}
            </StyledColRight>
          </>
        ) : (
          <>
            <HeaderBlock />
            {!isRightColumnBeforeLeft && isLeftColumnFixed && (
              <StyledColLeftMain leftColumnStyles={leftColumnStyles}>
                {colLeft}
              </StyledColLeftMain>
            )}

            <MobileContent
              isRightColumnFullHeight={isRightColumnFullHeight}
              ref={selectedMobileWrapper as React.RefObject<HTMLDivElement>}
            >
              {!isRightColumnBeforeLeft && !isLeftColumnFixed && (
                <StyledColLeftMain leftColumnStyles={leftColumnStyles}>
                  {colLeft}
                </StyledColLeftMain>
              )}

              <StyledColRight
                isRightColumnFullHeight={isRightColumnFullHeight}
                rightColumnStyles={rightColumnStyles}
              >
                {colRight}
              </StyledColRight>

              {isRightColumnBeforeLeft && (
                <StyledColLeftMain>{colLeft}</StyledColLeftMain>
              )}
            </MobileContent>
          </>
        )}
      </StyledWrapper>
      {!!footer && <StyledFooter>{footer}</StyledFooter>}
    </>
  );
}
