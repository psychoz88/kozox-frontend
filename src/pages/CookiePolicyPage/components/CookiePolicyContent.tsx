import React from 'react';

import {
  Content,
  Section,
  Title,
  Paragraph,
  StyledUnorderedList,
  StyledList,
  StyledParagraph,
} from '../../components/PolicyTypography';

const CookiePolicyContent = () => {
  return (
    <Content>
      <Section>
        <Title>COOKIES</Title>
        <Paragraph>
          Our website uses cookies. A cookie is a file containing an identifier
          (a string of letters and numbers) that is sent by a web server to a
          web browser and stored by the browser. Subsequently, the identifier is
          sent back to the server each time the browser requests a web page from
          the server. Cookies can be either "persistent" or "session" cookies:
          persistent cookies will be stored by the browser and will remain valid
          until the expiration date unless deleted by the user in advance;
          "session" cookies, on the contrary, will be deleted after the end of
          the session with the site or after the browser is closed. Cookies
          usually do not contain any information that identifies the user.
          However, your personal information that we hold may be linked to
          information stored and retrieved from cookies. (CHOOSE THE RIGHT
          PHRASE We use only session cookies/only persistent cookies/both
          persistent and session cookies on our website)
        </Paragraph>
        <Paragraph>
          The names of the cookies that we use on our website and the purposes
          for which they are used are listed below:
        </Paragraph>
        <Paragraph>
          On our website, we use Google Analytics and Adwords to recognize the
          computer, when a user (MARK ALL CASES WHERE COOKIES ARE USED ON THE
          SITE) visits the website / track user navigation on the website /
          allow the use of the user's shopping cart on the website / improve the
          usability of the website / analyze the use of the website / administer
          the website / prevent fraud and improve the security of the website /
          personalize the website for each user / target advertising that may be
          of interest to individual users / specify the purpose(s).
        </Paragraph>
        <Paragraph>
          Most browsers provide you with the opportunity to refuse the use of
          cookies, for example:
        </Paragraph>
        <StyledUnorderedList>
          <StyledList>
            In Internet Explorer (version 10) you can block using the cookie
            management settings available in the menu "Tools" - "Internet
            Options" - "Privacy" - "Advanced" ("Tools," "Internet Options,"
            "Privacy," "Advanced");
          </StyledList>
          <StyledList>
            In Firefox (version 24), you can block all cookies by clicking on
            "Tools" - "Options" - "Privacy": in the drop-down menu, select "Use
            custom log settings" and deselect "Accept cookies from websites";
            and finally;
          </StyledList>
          <StyledList>
            In Chrome (version 29), you can block all cookies by entering the
            "Settings and Management" menu, selecting "Settings" - "Show
            Advanced Settings" and "Content Settings", and then selecting
            "Prevent sites from sending any data" under the "Cookies" heading.
          </StyledList>
        </StyledUnorderedList>
        <StyledParagraph>
          Blocking all cookies will have a negative impact on the user
          experience of many websites. If you block cookies, you may not be able
          to use many features of our website.
        </StyledParagraph>
        <Paragraph>
          You can delete cookies that are already stored on your computer, for
          example:
        </Paragraph>
        <StyledUnorderedList>
          <StyledList>
            In Internet Explorer (version 10), you must delete cookies manually
            (instructions on how to do this can be found at
            http://support.microsoft.com/kb/278835);
          </StyledList>
          <StyledList>
            In Firefox (version 24), cookies can be deleted by going to the menu
            "Tools" - "Options" - "Privacy": in the drop-down menu, select "Use
            custom log settings", click "Show Cookies," and then "Delete all
            Cookies";
          </StyledList>
          <StyledList>
            In Chrome (version 29), you can delete all cookies by entering the
            "Settings and Management" menu, selecting "Settings" - "Show
            advanced settings" and "Clear browsing data", and then select
            "Delete cookies and other data and website plugins".
          </StyledList>
        </StyledUnorderedList>
        <Paragraph>
          Deleting cookies will have negative consequences for the usability of
          many websites.
        </Paragraph>
      </Section>
    </Content>
  );
};

export default CookiePolicyContent;
