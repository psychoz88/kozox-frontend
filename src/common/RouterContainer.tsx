import React from 'react';

function RouteContainer({
  component: Component,
  pageTitle,
  ...rest
}: any) {
  document.title = pageTitle;

  return <Component {...rest} />;
}

export default RouteContainer;
