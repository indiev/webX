import React from 'react';
import { Image } from '~/components/Image';

const Footer = () => {
  return (
    <footer className="py-4 text-right text-white bg-dark">
      <div className="d-flex justify-content-between align-items-center container-fluid">
        <Image src="logo/logo_white.svg" style={{ height: '3.5rem' }} />
        <div>
          <a
            className="d-block text-light"
            href="mailto:dev@bcventures.io"
            title="dev mail"
          >
            dev@bcventures.io
          </a>
          <p className="m-0">Ⓒ 2018 GXC World Pte Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
