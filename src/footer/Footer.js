import React from 'react';
import './Footer.css';
import logo_blur from '../header/header-logo.jpeg';
import social_img_1 from './img/twitter.png';
import social_img_2 from './img/facebook.png';
import social_img_3 from './img/google.png';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">

                <div className="footer__logo">
                    <img src={logo_blur} alt="logo" className="footer__logo-img" />
                </div>

                <div className="footer__menu">
                    <ul className="footer__menu-list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Документация</a></li>
                        <li><a href="#">Лицензия</a></li>
                        <li><a href="#">Мероприятия</a></li>
                        <li><a href="#">Команда</a></li>
                    </ul>
                </div>

                <div className="footer__social">
                    <a href="#"><img src={social_img_1} alt="twitter" /></a>
                    <a href="#"><img src={social_img_2} alt="facebook" /></a>
                    <a href="#"><img src={social_img_3} alt="google" /></a>
                </div>

            </footer>
        );
    };
};

export default Footer;
