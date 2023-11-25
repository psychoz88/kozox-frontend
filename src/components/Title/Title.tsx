import React from 'react';

import {TitleParagraph, SubTitleParagraph, Container} from './Title.styles';

type TProps = {
  title: string;
  subTitle?: string;
  isPageTitle?: boolean;
};

const Title = ({title, subTitle, isPageTitle}: TProps) => {
  return (
    <Container isPageTitle={isPageTitle}>
      <TitleParagraph isPageTitle={isPageTitle}>{title}</TitleParagraph>
      {subTitle && <SubTitleParagraph>{subTitle}</SubTitleParagraph>}
    </Container>
  );
};

export default Title;
