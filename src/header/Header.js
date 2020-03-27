import React from 'react';
import './Header.css';
import logo from './header-logo.jpeg';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div classNameName="header__logo">
                    <img className="header__logo-img" src={logo} alt="logo" />
                    <span className="header__logo-title">TO</span>
                    <span className="header__logo-title green">DO</span>
                </div>

                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-elem"><a href="#">как это работает</a></li>
                        <li className="header__menu-elem"><a href="#">о нас</a></li>
                        <li className="header__menu-elem"><a href="#">наши контакты</a></li>
                        <li className="header__menu-elem"><a href="#">блог</a></li>
                    </ul>
                </nav>
            </div>
        );
    };
};

export default Header;