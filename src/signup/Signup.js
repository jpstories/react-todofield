import React from 'react';
import './Signup.css';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'Планировать - это замечательно, попробуйте прямо сейчас!',
            promoText: 'Ваш промокод, введите:',
            randomNumber: this.random(10000)
        }
    }
    random = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    inputListener = (e) => {
        let input = document.querySelector('.signup-form-input');
        let signup = document.querySelector('.signup-wrap');
        let superMod = document.querySelector('.signup-title-p');
        if (this.state.randomNumber == e.target.value) {
            input.value = ''; // Очищаем поле
            this.setState({ randomNumber: '' }); //Удаляем число
            this.setState({ promoText: 'Вход...' }); //Меняем текст
            this.setState({ description: 'Ты активировал супер мод!!!' }); //Меняем текст
            input.setAttribute('placeholder', 'Вводи любой e-mail'); //Меняем текст в поле
            superMod.style.color = '#ffe';
            signup.style.backgroundColor = '#111';
        }
    }
    render() {
        return (
            <section className="signup-wrap">
                <div className="signup-title">
                    <h1 className="signup-title-h1">{this.props.h1}</h1>
                    <p className="signup-title-p">{this.state.description}</p>
                    <p className="promo-code">{this.state.promoText} <span>{this.state.randomNumber}</span></p>
                </div>

                <form className="signup-form">
                    <input onChange={this.inputListener} className="signup-form-input" placeholder="Ваш e-mail адрес" type="text" />
                    <button className="signup-form-btn">{this.props.textBtn}</button>
                </form>
            </section>
        );
    };
};

export default Signup;
