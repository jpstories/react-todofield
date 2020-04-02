import React from 'react';
import './Article.css';
import article_img from '../wrap/wrap-todo.png';

import article_icon_1 from './img/article_icon1.png';
import article_icon_2 from './img/article_icon2.png';
import article_icon_3 from './img/article_icon3.png';
import article_icon_4 from './img/article_icon4.png';

let article__content = [
    [article_icon_1, 'Безопасная платформа', 'Ваши задачи всегда с вами'],
    [article_icon_2, 'Быстрый и удобный функционал', 'Все очень быстро'],
    [article_icon_3, 'Многозадачность', 'Ставьте себе много задач'],
    [article_icon_4, 'На любом устройстве', 'Телефон, планшет, пк']
];

class Article extends React.Component {
    render() {
        return (
            <article className="article">

            <div className="article__title">
                <h1 className="article__title-h1">Преимущества TODO</h1>
            </div>

            <div className="article__wrapper">
                <div className="article__wrap">
                    {article__content.map((elem, i) => {
                        return  <div className="article__content">
                                    <div className="article__content-title">
                                        <img className="article__content-img" src={elem[0]} alt="" />
                                        <h2 className="article__content-h2">{elem[1]}</h2>
                                    </div>
                                    <div className="article__content-desc">
                                        <p className="article__content-desc-p">
                                            {elem[2]}
                                        </p>
                                    </div>
                                </div>})}
                </div>

                <div className="article__wrap-img">
                    <img src={article_img} alt="todo" />
                </div>
            </div>
        </article>
        );
    };
};

export default Article;
