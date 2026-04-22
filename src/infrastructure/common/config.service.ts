const ConfigService = {
  DOMAIN: process.env.REACT_APP_DEVELOPMENT_DOMAIN,
  ENV: process.env.REACT_APP_ENV,
  PROTOCOL: process.env.REACT_APP_PROTOCOL,
  NGROK: '',
  REACT_APP_LOGIN_URL: '',
};

const GATEWAY_BASE = () => {
  if (process.env.NODE_ENV === 'development')
    return `${ConfigService.PROTOCOL}://${ConfigService.DOMAIN}`;
  return '';
};

export {ConfigService, GATEWAY_BASE};
