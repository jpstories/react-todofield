const createSlide = () => {
    let sliderListElem = document.querySelectorAll('.slider__toggle-item');
    let sliderList = document.querySelector('.slider__toggle-list');
    let sliderWrapper = document.querySelector('.slider__wrapper');

    sliderList.addEventListener('click', (e) => {
        const createSlide = (icon, h2, text, img) => {
            sliderWrapper.innerHTML = `
                            <div class="slider__content">
            
                                <div class="slider__content-title">
                                    <img class="slider__content-img" src="${icon}" alt="">
                                    <h2 class="slider__content-h2">${h2}</h2>
                                </div>
            
                                <div class="slider__content-desc">
                                    <p class="slider__content-desc-p">
                                        ${text}
                                    </p>
                                </div>
                            </div>
            
                            <div class="slider__img">
                                <img src="${img}" alt="">
                            </div>`;
        };

        if (e.target.classList.contains('slider__toggle-item')) {
            for (let i = 0; i < sliderListElem.length; i++) {
                sliderListElem[i].classList.remove('active');
            };

            sliderWrapper.classList.add('animate');

            if (e.target == sliderListElem[0]) {
                createSlide('img/article_icon1.png',
                    'Безопасная платформа',
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, voluptatibus, adipisicing elit. Maxime, voluptatibus, eorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, voluptatibus, eorem ipsum dolor sit, amet consectetur',
                    './img/sony.png');
            };
            if (e.target == sliderListElem[1]) {
                createSlide('img/article_icon2.png',
                    'Быстрый и удобный функционал',
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, voluptatibus, adipisicing elit. Maxime, voluptatibus, eorem ipsum dolor sit, amet consectetur',
                    './img/MSFT-logo.png');
            };
            if (e.target == sliderListElem[2]) {
                createSlide('img/article_icon3.png',
                    'Многозадачность',
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, voluptatibus, adipisicing elit. Maxime, voluptatibus, eorem ipsum dolor sit, amet consectetur',
                    './img/evernote.png');
            };
            if (e.target == sliderListElem[3]) {
                createSlide('img/article_icon4.png',
                    'На любом устройстве',
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, voluptatibus, adipisicing elit. Maxime, voluptatibus, eorem ipsum dolor sit, amet consectetur',
                    './img/firefox.png');
            };

            e.target.classList.add('active');
        };
    });
};

createSlide();






