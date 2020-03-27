import React from 'react';
import './Signup.css';

class Signup extends React.Component {
    render() {
        return (
            <section className="signup-wrap">
                <div className="signup-title">
                    <h1 className="signup-title-h1">Быстрый доступ</h1>
                    <p className="signup-title-p">Планировать - это замечательно, попробуйте прямо сейчас!</p>
                </div>

                <form className="signup-form">
                    <input className="signup-form-input" placeholder="Ваш e-mail адрес" type="text" />
                    <button className="signup-form-btn">signup</button>
                </form>
            </section>
        );
    };
};

export default Signup;
