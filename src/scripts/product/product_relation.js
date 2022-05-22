import Swiper from "swiper";

if($(".detail_related .swiper-container").length > 0){
    const prd_relation = new Swiper('.detail_related .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 1000,
        loop: false,
        navigation: {
            nextEl: '.detail_related .swiper-button-next',
            prevEl: '.detail_related .swiper-button-prev'
        }
    });
}