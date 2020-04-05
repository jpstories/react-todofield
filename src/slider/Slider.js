import React from 'react';
import './Slider.css';
// import './createSlide.js';

import slider_icon_1 from '../article/img/article_icon3.png';
import todo_img from '../wrap/wrap-todo.png';

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Подробнее",
            slideTitle: "Многозадачность",
        }
    }

    li = document.querySelector('.slider__toggle-item');
    
    createSlide = () => {
        this.setState({slideTitle: "Безопасность"});
    }
    render() {
        return (
            <section className="slider">
                <div className="slider__title">
                    <h1 className="slider__title-h1">{this.state.title}</h1>
                </div>

                <div className="slider__wrapper">

                    <div className="slider__content">

                        <div className="slider__content-title">
                            <img className="slider__content-img" src={slider_icon_1} alt="" />
                            <h2 className="slider__content-h2">{this.state.slideTitle}</h2>
                        </div>

                        <div className="slider__content-desc">
                            <p className="slider__content-desc-p">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Maxime, voluptatibus,
                                adipisicing elit. Maxime, voluptatibus,
                                eorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Maxime, voluptatibus,
                                eorem ipsum dolor sit, amet consectetur
                            </p>
                        </div>
                    </div>

                    <div className="slider__img">
                        <img src={todo_img} alt="" />
                    </div>

                </div>

                <div className="slider__toggle">
                    <ul className="slider__toggle-list">
                        <li className="slider__toggle-item active">1</li>
                        <li className="slider__toggle-item" onClick={this.createSlide}>2</li>
                        <li className="slider__toggle-item">3</li>
                        <li className="slider__toggle-item">4</li>
                    </ul>
                </div>
            </section>

        );
    };
};

export default Slider;

