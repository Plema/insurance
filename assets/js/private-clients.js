$(document).ready(function(){

    $('.news-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
        ]
    });

    if($(window).width() >= 768){
        $('.news-item .img').height( $('.news-item .img').width() / 1.72 );
    }else{
        $('.news-item .img').height( $('.news-item .img').width() / 1.25 );
    }

    $('.clients-amount-items').showmore({
        closedHeight: 220,
        buttonTextMore: 'Еще предложения',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });

    $('.description-item article').showmore({
        closedHeight: 215,
        buttonTextMore: 'Подробнее',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });
    
});

$(window).resize(function(){

    if($(window).width() >= 768){
        $('.news-item .img').height( $('.news-item .img').width() / 1.72 );
    }else{
        $('.news-item .img').height( $('.news-item .img').width() / 1.25 );
    }

});