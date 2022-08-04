document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.form__field--phone')) {
         $('.form__field--phone').inputmask();
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

    if (document.querySelector('.gallery')) {
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