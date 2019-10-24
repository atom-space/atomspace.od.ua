import React, { useState } from 'react';
import cl from 'classnames';

const SmallSidebar = ({ links }) => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const toggleNav = status => {
    setIsNavOpened(status);
  };

  return (
    <nav className="small-nav">
      <ul className={cl('nav-list', { hide: !isNavOpened })}>
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.target}
              onClick={toggleNav.bind(this, false)}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <div
          className={cl('nav_toggle', { arrow: isNavOpened })}
          role="presentation"
          onClick={toggleNav.bind(this, !isNavOpened)}
        />
      </div>
    </nav>
  );
};

export default SmallSidebar;
