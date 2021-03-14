'use strict';
const sliderCarousel = () => {
    let slidesToShow = 4,
    next = document.querySelector('.slideCarousel-right'),
    prev = document.querySelector('.slideCarousel-left');
    const main = document.querySelector('.companies-wrapper'),
        wrap = document.querySelector('.companies-hor'),
        slides = document.querySelectorAll('.companies-hor-item'),
        options = {
            position: 0,
            infinity: true,
            widthSlide: Math.floor(100 / slidesToShow)
        },
        
        responsive = [{
                breakpoint: 1024,
                slidesToShow: 3
            },
            {
                breakpoint: 768,
                slidesToShow: 2
            },
            {
                breakpoint: 576,
                slidesToShow: 1
            }
        ];
        
    const addGloClass = () => {
        main.classList.add("glo-slider");
        wrap.classList.add("glo-slider__wrap");
        for (const item of slides) {
            item.classList.add("glo-slider__slide");
        }
    };

    addGloClass();

    const addStyle = () => {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }
            .glo-slider__wrap{
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__slide{
                display: flex !important;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${options.widthSlide}% !important;
                margin: auto 0 !important; 
            }
            .slideCarousel-right{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                border-left-color: #19b6fe
            }
            .slideCarousel-left{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                border-right-color: #19b6fe
            }
        `;
        document.head.appendChild(style);
    };

    addStyle();

    const prevSlider = () => {
        if (options.infinity || options.position > 0) {
            --options.position;
            if (options.position < 0) {options.position = slides.length - slidesToShow;}
            wrap.style.transform = `translateX(-${options.position * options.widthSlide}%)`;
        }
    };

    const nextSlider = () => {
        if (options.infinity || options.position < slides.length - slidesToShow) {
            ++options.position;
            if (options.position > slides.length - slidesToShow) {options.position = 0;}
            wrap.style.transform = `translateX(-${options.position * options.widthSlide}%)`;
        }
    };
    const controlSliders = () => {
        prev.addEventListener('click', prevSlider);
        next.addEventListener('click', nextSlider);
    };

   


    const addArrow = () => {
        prev = document.createElement('button');
        next = document.createElement('button');
        next.className = 'slideCarousel-right';
        prev.className = 'slideCarousel-left';

        main.appendChild(prev);
        main.appendChild(next);

    };
    if(prev && next){
        controlSliders();
    } else{
        addArrow();
        controlSliders();

    }

    const responseInit = () => {
        const slidesToShowDefault = slidesToShow;
        const allResponse = responsive.map(item => item.breakpoint);

        const maxResponse = Math.max(...allResponse);
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse) {
                        slidesToShow = responsive[i].slidesToShow;
                        options.widthSlide = Math.floor(100 / slidesToShow);
                        addStyle();
                    }
                }
            } else {
                slidesToShow = slidesToShowDefault;
                options.widthSlide = Math.floor(100 / slidesToShow);
                addStyle();
            }

        };
        checkResponse();
        document.addEventListener('resize', checkResponse);
    };
    responseInit();
};

export default sliderCarousel;