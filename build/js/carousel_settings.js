$(document).ready(function () {
    let owl = $('.top-slider__carousel');
    owl.owlCarousel({
        nav: false,
        navText: false,
        items: 1,
        mouseDrag: true,
        singleItem: true,
        dots: false
    });
    owl.on('changed.owl.carousel', function(e){
        let num = e.item.index+1;
        $('.owl-dot').removeClass('active');
        $(".top-slider__navigation-dots").find('[id="'+num+'"]').addClass('active');
    });
    $('.navigation--top-slider .navigation__prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    $('.navigation--top-slider .navigation__next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    let owl2 = $('.slider-block__carousel--shares');
    owl2.owlCarousel({
        items: 4,
        mouseDrag: true,
        singleItem: false,
        dots: false,
        stagePadding: 0,
        margin: 5,
        nav: false
    });
    $('.navigation--shares .navigation__prev').click(function () {
        owl2.trigger('prev.owl.carousel');
    });
    $('.navigation--shares .navigation__next').click(function () {
        owl2.trigger('next.owl.carousel');
    });
    let owl3 = $('.slider-block__carousel--newest-products');
    owl3.owlCarousel({
        items: 4,
        mouseDrag: true,
        singleItem: false,
        dots: false,
        stagePadding: 0,
        margin: 5,
        nav: false
    });
    $('.navigation--newest-products .navigation__prev').click(function () {
        owl3.trigger('prev.owl.carousel');
    });
    $('.navigation--newest-products .navigation__next').click(function () {
        owl3.trigger('next.owl.carousel');
    });
    let owl4 = $('.slider-block__carousel--high-demand');
    owl4.owlCarousel({
        items: 4,
        mouseDrag: true,
        singleItem: false,
        dots: false,
        stagePadding: 0,
        margin: 5,
        nav: false
    });
    $('.navigation--high-demand .navigation__prev').click(function () {
        owl4.trigger('prev.owl.carousel');
    });
    $('.navigation--high-demand .navigation__next').click(function () {
        owl4.trigger('next.owl.carousel');
    });
});