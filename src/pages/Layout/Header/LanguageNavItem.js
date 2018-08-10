import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import i18n from '~/i18n';
import { NavItem } from '~/components/Nav';
import styles from './LanguageNavItem.scss';

const cx = classNames.bind(styles);

@translate()
class LanguageNavItem extends Component {
  changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  render() {
    const { language: currentLang } = this.props.i18n;
    const supportedLangs = {
      en: 'EN',
      ko: 'KR'
    };

    return (
      <div className={cx('languageNavItem', 'ml-3 pl-3 font-weight-bold')}>
        {Object.keys(supportedLangs).map(key => (
          <NavItem
            key={key}
            className={cx(key === currentLang && 'active')}
            onClick={() => this.changeLanguage(key)}
          >
            {supportedLangs[key]}
          </NavItem>
        ))}
      </div>
    );
  }
}

export default LanguageNavItem;
