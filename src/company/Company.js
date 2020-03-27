import React from 'react';
import './Company.css';
import comp_logo_1 from './img/evernote.png';
import comp_logo_2 from './img/firefox.png';
import comp_logo_3 from './img/sony.png';
import comp_logo_4 from './img/MSFT-logo.png';

class Company extends React.Component {
    render() {
        return (
            <section className="partner">
                <div className="partner__logo"><img src={comp_logo_4} alt="microsoft" /></div>
                <div className="partner__logo"><img src={comp_logo_2} alt="firefox" /></div>
                <div className="partner__logo"><img src={comp_logo_3} alt="sony" /></div>
                <div className="partner__logo"><img src={comp_logo_1} alt="evetnote" /></div>
            </section>
        );
    };
};

export default Company;
