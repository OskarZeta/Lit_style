(function () {
    // let parent = document.querySelector('.main-content__right-column');
    // function slideHover(e) {
    //     let target = e.target;
    //     while (this != target){
    //         if (target.classList.contains('slider-block__item')){
    //             let text = target.querySelector('.slider-block__more-info');
    //             $(text).animate({
    //                 height: 'toggle'
    //             }, 200);
    //             // if (e.type == "mouseover"){
    //             //     text.classList.add('slider-block__more-info--visible');
    //             // } else if (e.type == "mouseout") {
    //             //     text.classList.remove('slider-block__more-info--visible');
    //             // }
    //         }
    //         target = target.parentNode;
    //     }
    // }
    // parent.addEventListener('mouseover', slideHover);
    let item =  $('.slider-block__item');
    item.mouseenter(function () {
        $(this).find('.slider-block__more-info').animate({
            height: "toggle"
        }, 200);
        $(this).find('.slider-block__more-info').css("display", "block");
    });
    item.mouseleave(function () {
        $('.slider-block__more-info').css("display", "none");
    });

    let showBtn = document.querySelector('.btn--news');
    function showMore(e) {
        let container = e.target.parentNode.querySelector('.news__container');
        if (!this.classList.contains('btn--shown')){
            this.classList.add('btn--shown');
            this.innerHTML = "Скрыть";
            [].slice.call(container.children).forEach(function (item) {
                if (!item.classList.contains('news__slide--visible')){
                    item.classList.add('news__slide--visible');
                }
            });
        } else {
            this.classList.remove('btn--shown');
            this.innerHTML = "Показать все";
            [].slice.call(container.children).forEach(function (item, index) {
                if (index > 2){
                    item.classList.remove('news__slide--visible');
                }
            });
        }
    }
    showBtn.addEventListener('click', showMore);
})();