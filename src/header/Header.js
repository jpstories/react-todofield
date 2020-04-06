import React from 'react';
import './Header.css';
import logo from './header-logo.jpeg';
import Nav from './nav/Nav';
import Clock from './clock/Clock';

let navObject = {'как это работает': '#', 
                'о нас': '#',
                'наши контакты': '#',
                'блог': '#'};

class Header extends React.Component {
    render() {

        return (
            <div className="header">
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt="logo" />
                    <span className="header__logo-title">{this.props.titleLeft}</span>
                    <span className="header__logo-title green">{this.props.titleRight}</span>
                </div>

                {/* Menu component */}
                <Nav menu={navObject}/>

                {/* Clock component */}
                <Clock />     
            </div>
        );
    };
};

export default Header;
