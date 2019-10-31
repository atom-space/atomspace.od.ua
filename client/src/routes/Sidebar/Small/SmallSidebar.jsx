import React from 'react';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import MyContext from '../../../context/Base/AppContext';

const SmallSidebar = ({ links, handleDialog }) => {
  const { t } = useTranslation();
  return (
    <MyContext>
      {({ setIsNavOpened, isNavOpened }) => (
        <nav className="small-nav">
          {isNavOpened && (
            <ul className={cl('nav-list')}>
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.target}
                    onClick={() => setIsNavOpened(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div>
            <div
              className={cl('nav_toggle', { arrow: isNavOpened })}
              role="presentation"
              onClick={() => setIsNavOpened(!isNavOpened)}
            />
          </div>
          {isNavOpened && (
            <div className="partner-block">
              <a
                className="btn btn-support btn-donate"
                href="#partnerForm"
                onClick={handleDialog}
              >
                {t('form.bePartner')}
              </a>
            </div>
          )}
        </nav>
      )}
    </MyContext>
  );
};

export default SmallSidebar;
