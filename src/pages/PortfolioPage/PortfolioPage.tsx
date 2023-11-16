import React from 'react';

import QuadrupleBlock from 'components/Quadruple/QuadrupleBlock';

const PortfolioPage = () => {
  const title = 'Our work';
  const websiteLink = 'https://www.google.com.ua/?hl=ru';
  const firstBlock = <div>First side</div>;
  const secondBlock = (
    <div>
      The following assets are available in AI, PNG, and SVG formats. If you
      need guidance on the optimal format for your needs or require a different
      format, please do not hesitate to contact us. When referencing "Oxide",
      always use our logo. Ensure the usage of our logo retains appropriate
      contrast for the best visibility.
    </div>
  );
  const thirdBlock = <div>Third side</div>;
  const foursBlock = <div>Fours side</div>;

  return (
    <div>
      <QuadrupleBlock
        title={title}
        websiteLink={websiteLink}
        firstBlock={firstBlock}
        secondBlock={secondBlock}
        thirdBlock={thirdBlock}
        foursBlock={foursBlock}
        isShowed
      />
    </div>
  );
};

export default PortfolioPage;
