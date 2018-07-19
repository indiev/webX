import React from 'react';
import classNames from 'classnames/bind';

import styles from './style.scss';

import logo from '~/assets/images/logo/footer.svg';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className="container">
        <img className={cx('logo')} src={logo} alt="logo" />
        <div>
          <a
            className="d-block text-light"
            href="mailto:support@bcventures.io"
            title="support mail"
          >
            support@bcventures.io
          </a>
          <p className="m-0">Ⓒ 2018 GXC World Pte Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
