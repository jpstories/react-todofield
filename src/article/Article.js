import React from 'react';
import './Article.css';
import article_img from '../wrap/wrap-todo.png';

import article_icon_1 from './img/article_icon1.png';
import article_icon_2 from './img/article_icon2.png';
import article_icon_3 from './img/article_icon3.png';
import article_icon_4 from './img/article_icon4.png';

class Article extends React.Component {
    render() {
        return (
            <article className="article">

            <div className="article__title">
                <h1 className="article__title-h1">Преимущества TODO</h1>
            </div>

            <div className="article__wrapper">
                <div className="article__wrap">

                    <div className="article__content">
                        <div className="article__content-title">
                            <img className="article__content-img" src={article_icon_1} alt="" />
                            <h2 className="article__content-h2">Безопасная платформа</h2>
                        </div>

                        <div className="article__content-desc">
                            <p className="article__content-desc-p">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. pochemu udalila iz druzey, voluptatibus,
                                adipisicing elit. Maxime, voluptatibus,
                                eorem ipsum dolor sit, amet consectetur
                            </p>
                        </div>
                    </div>

                    <div className="article__content">
                        <div className="article__content-title">
                            <img className="article__content-img" src={article_icon_2} alt="" />
                            <h2 className="article__content-h2">Быстрый и удобный функционал</h2>
                        </div>

                        <div className="article__content-desc">
                            <p className="article__content-desc-p">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Maxime, voluptatibus,
                                adipisicing elit. Maxime, voluptatibus,
                                eorem ipsum dolor sit, amet consectetur
                            </p>
                        </div>
                    </div>

                    <div className="article__content">
                        <div className="article__content-title">
                            <img className="article__content-img" src={article_icon_3} alt="" />
                            <h2 className="article__content-h2">Многозадачность</h2>
                        </div>

                        <div className="article__content-desc">
                            <p className="article__content-desc-p">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Maxime, voluptatibus,
                                adipisicing elit. Maxime, voluptatibus,
                                eorem ipsum dolor sit, amet consectetur
                            </p>
                        </div>
                    </div>

                    <div className="article__content">
                        <div className="article__content-title">
                            <img className="article__content-img" src={article_icon_4} alt="" />
                            <h2 className="article__content-h2">На любом устройстве</h2>
                        </div>

                        <div className="article__content-desc">
                            <p className="article__content-desc-p">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Maxime, voluptatibus,
                                adipisicing elit. Maxime, voluptatibus,
                                eorem ipsum dolor sit, amet consectetur
                            </p>
                        </div>
                    </div>
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
