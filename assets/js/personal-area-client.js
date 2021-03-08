$(document).ready(function(){

    $('.personal-area-content article').showmore({
        closedHeight: 315,
        buttonTextMore: 'Подробнее',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });
    
    $('.personal-enumeration .personal-items').showmore({
        closedHeight: 510,
        buttonTextMore: 'Еще опции',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });

    $(".date").flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });

    $('.legal-services-item .img').height( $('.legal-services-item .img').width() / 1.12 );

    $('.legal-services-item .text').matchHeight({
        byRow: false
    }); 

    $('.shares-item .img').height( $('.shares-item .img').width() / 1.85 );   

    if($(window).width() >= 768){

        $('.shares-item .text h5').matchHeight({
            byRow: true
        }); 

    }

    $('.shares-items').showmore({
        closedHeight: 635,
        buttonTextMore: 'Еще акции',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });

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

});

$(window).resize(function(){

    $('.legal-services-item .img').height( $('.legal-services-item .img').width() / 1.12 );

    $('.shares-item .img').height( $('.shares-item .img').width() / 1.85 );       

    if($(window).width() >= 768){
        $('.news-item .img').height( $('.news-item .img').width() / 1.72 );
    }else{
        $('.news-item .img').height( $('.news-item .img').width() / 1.25 );
    }

});