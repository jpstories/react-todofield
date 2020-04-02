import React from 'react';
import './Company.css';
import lg_1 from './img/evernote.png';
import lg_2 from './img/firefox.png';
import lg_3 from './img/sony.png';
import lg_4 from './img/MSFT-logo.png';

let company__logo = {'1':lg_1, '2':lg_2, '3':lg_3, '4':lg_4};


class Company extends React.Component {
    render() {
        return (
            <section className="partner">
                {Object.keys(company__logo).map((item) => {
                    return <div className="partner__logo"><img src={company__logo[item]} alt="microsoft" /></div>;
                })}
            </section>
        );
    };
};

export default Company;
