import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../img/Blogo-transparent.png';
import { useState } from 'react';
import { InstallButton } from '../InstallButton';

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className={active ? 'hamburger hamburger--otevrene' : 'hamburger'}
        aria-label="menu"
        onClick={() => {
          if (active) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        <i className="las la-bars"></i>
      </button>
      {active && (
        <ul className="navigation-bar">
          <li>
            <Link
              className="navigation-link"
              to="/samovysetreni"
              onClick={() => setActive(false)}
            >
              Jak na to(.)(.)
            </Link>{' '}
          </li>
          <li>
            <Link
              className="navigation-link"
              to="/kalendar"
              onClick={() => setActive(false)}
            >
              Kalendář
            </Link>
          </li>
          <li>
            <Link
              className="navigation-link"
              to="/codelatkdyz"
              onClick={() => setActive(false)}
            >
              Co dělat, když...
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export const Header = () => {
  const [withLine, setWithLine] = useState(false);

  return (
    <>
      <header className="page-header">
        <Menu />
        <div>
          <Link style={{ display: 'block', margin: '1rem 0' }} to="/">
            <img className="logo" src={logo} />
          </Link>{' '}
        </div>

        <nav className="navigation">
          <button
            onClick={() => setWithLine(true)}
            className="userChoosed"
            disabled={withLine}
          >
            <Link
              className="navigation-link"
              to="/samovysetreni"
              alt={withLine ? 'userChoosed' : 'navigation-link'}
            >
              Jak na to(.)(.)
            </Link>{' '}
          </button>
          <br />
          <button
            onClick={() => setWithLine(true)}
            className="userChoosed"
            disabled={withLine}
          >
            <Link
              className="navigation-link"
              to="/kalendar"
              alt={withLine ? 'userChoosed' : 'navigation-link'}
            >
              Kalendář
            </Link>{' '}
          </button>
          <br />
          <button
            onClick={() => setWithLine(true)}
            className="userChoosed"
            disabled={withLine}
          >
            <Link
              className="navigation-link"
              to="/codelatkdyz"
              alt={withLine ? 'userChoosed' : 'navigation-link'}
            >
              Co dělat, když...
            </Link>{' '}
          </button>
        </nav>
      </header>
    </>
  );
};
