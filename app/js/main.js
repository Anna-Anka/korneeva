document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.form__field--phone')) {
        $('.form__field--phone').inputmask();
    }

    if (document.querySelector('.reviews')) {
        $(".reviews__stars").rateYo({
            starWidth: "22px",
            ratedFill: "#FECC02",
            readOnly: true,
            starSvg: '<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"/></svg>',
            spacing: "3px"
        });
    }

    if (document.querySelector('.modal')) {
        const modalOpen = document.querySelectorAll('.modal-open');
        modalOpen.forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('.modal').classList.add('modal--active')
            })
        })

        document.querySelector('.modal__close').onclick = function () {
            document.querySelector('.modal').classList.remove('modal--active');
        };

        const modal = document.querySelector('.modal__content');
        document.addEventListener('mousedown', (e) => {
            if (!modal.contains(e.target)) {
                document.querySelector('.modal').classList.remove('modal--active');
            }
        });
    }

    if (document.querySelector('.reviews')) {
        const sliderReviews = document.querySelector('.reviews__swiper');
        const swiperReviews = new Swiper(sliderReviews, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,

            navigation: {
                nextEl: '.reviews__button--next',
                prevEl: '.reviews__button--prev',
            },
        });
    }

    if (document.querySelector('.works')) {
        const sliderWorks = document.querySelector('.works__swiper');
        const swiperWorks = new Swiper(sliderWorks, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,

            navigation: {
                nextEl: '.works__button--next',
                prevEl: '.works__button--prev',
            },
        });
    }

    if (document.querySelector('.studio')) {
        const mediaQuery = window.matchMedia('(max-width: 1000px)')

        function handleTabletChange(e) {
            if (e.matches) {
                const sliderStudio = document.querySelector('.studio__swiper');
                const swiperStudio = new Swiper(sliderStudio, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0,

                    navigation: {
                        nextEl: '.gallery__button--next',
                        prevEl: '.gallery__button--prev',
                    },
                });
            }
        }
        mediaQuery.addListener(handleTabletChange)
        handleTabletChange(mediaQuery)
    }
});