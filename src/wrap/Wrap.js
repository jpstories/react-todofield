import React from 'react';
import './Wrap.css';
import todo from './wrap-todo.png';

class Wrap extends React.Component {
    render() {
        return (
            <div className="wrap">
                <div className="wrap__content">

                    <div className="wrap__title">
                        <h1 className="wrap__title-h1">Планируйте с удобным интерфейсом</h1>
                        <p className="wrap__title-p">Ваши планы теперь прекрасны</p>
                        <span className="wrap__title-span">Пользуйтесь приложением 
                            <span className="yellow">Бесплатно</span>
                        </span>

                        <form className="wrap__form" action="">
                            <input className="wrap__form-input" placeholder="Ваш e-mail" type="text" />
                            <button type="submit" className="wrap__form-btn">signup</button>
                        </form>
                    </div>

                    <div className="wrap__content-img">
                        <img src={todo} alt="todo" />
                    </div>

                </div>
            </div>
        );
    };
};

export default Wrap;
