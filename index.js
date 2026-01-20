const swiperConfigs = {
    mySwiper1: { pagination: '.tool1' },
    mySwiper2: { pagination: '.tool2' },
    mySwiper3: { pagination: '.tool3' },
    mySwiper4: { pagination: '.tool4' },
    mySwiper5: { pagination: '.tool5' },
    mySwiper6: { pagination: '.tool6' },
    mySwiper7: { pagination: '.tool7' }
};

const swiperInstances = {};

UIkit.util.on('.uk-accordion', 'shown', function (event) {

    const swiperEl = event.target.querySelector('.swiper');

    if (!swiperEl) return;

    const swiperClass = Object.keys(swiperConfigs)
        .find(cls => swiperEl.classList.contains(cls));

    if (!swiperClass) return;

    // Prevent duplicate initialization
    if (swiperInstances[swiperClass]) return;

    swiperInstances[swiperClass] = new Swiper(`.${swiperClass}`, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: swiperConfigs[swiperClass].pagination,
        },
    });
});
