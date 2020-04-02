import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-elem"><a href="#">как это работает</a></li>
                    <li className="header__menu-elem"><a href="#">о нас</a></li>
                    <li className="header__menu-elem"><a href="#">наши контакты</a></li>
                    <li className="header__menu-elem"><a href="#">блог</a></li>
                </ul>
                <div className="menu__indicator">

                </div>
            </nav>
        );
    };
};

export default Nav;
