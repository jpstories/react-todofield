import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        let navObject = this.props.menu;
        return (
            <nav className="header__menu">
                <ul className="header__menu-list">
                    {Object.keys(navObject).map((elem) => {
                        return <li className="header__menu-elem"><a href={navObject[elem]}>{elem}</a></li>;
                    })}
                </ul>
                <div className="menu__indicator"></div>
            </nav>
        );
    };
};

export default Nav;
