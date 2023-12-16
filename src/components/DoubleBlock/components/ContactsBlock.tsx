import React from 'react';

import SocialLinks from 'components/SocialLinks/SocialLinks';

import {
  BlockItem,
  SecondBlock,
  ItemTitle,
  ItemLink,
} from '../DoubleBlock.styles';

type TProps = {
  email?: string;
  phone?: string;
};

const ContactsBlock = ({email, phone}: TProps) => {
  return (
    <SecondBlock>
      <BlockItem>
        <ItemTitle>Email</ItemTitle>
        <ItemLink href={`mailto:${email}`}>{email}</ItemLink>
      </BlockItem>
      <BlockItem>
        <ItemTitle>Phone</ItemTitle>
        <ItemLink href={`tel:${phone}`}>{phone}</ItemLink>
      </BlockItem>
      <BlockItem>
        <ItemTitle margin='0 0 10px'>Social media</ItemTitle>
        <SocialLinks green />
      </BlockItem>
    </SecondBlock>
  );
};

export default ContactsBlock;
