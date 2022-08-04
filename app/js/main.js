document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.form__field--phone')) {
         $('.form__field--phone').inputmask();
    }

    if (document.querySelector('.gallery')) {
        const mediaQuery = window.matchMedia('(max-width: 1000px)')

        function handleTabletChange(e) {
            if (e.matches) {
                console.log('dsada')
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