import React from 'react';

import {TitleParagraph, SubTitleParagraph, Container} from './Title.styles';

type TProps = {
  title: string;
  subTitle?: string;
};

const Title = ({title, subTitle}: TProps) => {
  return (
    <Container>
      <TitleParagraph>{title}</TitleParagraph>
      <SubTitleParagraph>{subTitle}</SubTitleParagraph>
    </Container>
  );
};

export default Title;
