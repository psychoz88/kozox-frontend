import React from 'react';

import {
  Content,
  Section,
  Title,
  Paragraph,
} from '../../components/PolicyTypography';

const CookiePolicyContent = () => {
  return (
    <Content>
      <Section>
        <Title>What are Cookies?</Title>
        <Paragraph>
          A cookie is a small file attachment, which is placed in the browser of
          your computer or on your mobile device. So-called "first party
          cookies" are cookies controlled by the company, which operates the
          domain on which the cookies are placed. Our cookies are therefore
          "first party cookies". Whenever we allow third parties to use cookies
          through the web pages and apps (in following referenced as "Products")
          of us, these cookies are "third party cookies". In addition to
          cookies, other comparable tracking technologies may be used. For
          example, they include tracking pixels (called pixel tags, web bugs, or
          GIFs), tracking URLs, local storage objects (LSO) or software
          developer kits (SDKs). A tracking pixel is a tiny graphic only one
          pixel in size which is sent either via a web page request, in an app,
          or in an advertisement to your computer. Pixels can be used to request
          data from your device, for example your type of device or your
          operating system, the IP address, and the time of your visit. Pixels
          are also used to operate and access cookies in your Browser. Tracking
          URLs can be used to determine via which referring website our Products
          are visited. LSO works in a similar manner as cookies, but the
          information is stored locally on your browser. SDKs, however, are
          small code components within apps, which work in a manner similar to
          cookies and tracking pixels. For the purposes of the present rules
          regarding cookies, all of these technologies are collectively referred
          to as "cookies". Depending on their function and their intended use,
          cookies can be divided into four categories: Strictly Necessary
          Cookies, Functional Cookies, Performance Cookies, and Targeting
          Cookies.
        </Paragraph>
      </Section>
    </Content>
  );
};

export default CookiePolicyContent;
