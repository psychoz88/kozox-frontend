import React, {useState} from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';

import {DateFormats, getDateTime} from 'utils/dateUtils';

const SITE_CONSENT = 'cookies_acception';

const CookiesModal = () => {
  const expiresDate = getDateTime(new Date())
    .plus({days: 30})
    .toFormat(DateFormats['Mon, 1 Jan 2022 00:00:01 GMT']);

  const cookieStorage = {
    getItem: (key: string) => {
      const cookies: any = document.cookie
        .split(';')
        .map((cookie) => cookie.split('='))
        .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {});

      return cookies[key];
    },
    setItem: (key: string, value: boolean) => {
      document.cookie = `${key}=${value};expires=${expiresDate}`;
    },
  };

  const [isOpen, setOpen] = useState(
    !(cookieStorage.getItem(SITE_CONSENT) === 'true' ? true : false),
  );

  const toggleStorage = (prop: boolean) =>
    cookieStorage.setItem(SITE_CONSENT, prop);

  const onAccept = () => {
    toggleStorage(true);
    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const footer = (
    <div>
      <Button onClick={onAccept} buttonType='primary' size='small'>
        Accept
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        header='Cookies'
        body={`By using our website, you agree to our Privacy Policy and our cookies usage.`}
        footer={footer}
        onClose={onClose}
        isShowed={isOpen}
      />
    </div>
  );
};

export default CookiesModal;
