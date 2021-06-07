$(document).ready(function(){

    $('.banner-slider').slick({
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplaySpeed: 4000,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                adaptiveHeight: true
              }
            }
        ]
    });
    $(window).blur(function() { 
        $('.banner-slider').slick('slickPause')
      }); //Покинули вкладку
      $(window).focus(function() { 
        $('.banner-slider').slick('slickPlay')
      }); //Во вкладке

    $(".description-content a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top ; 
        $('body,html').animate({scrollTop: top}, 700);
    });

    if($(window).width() >= 1024){

        $('.banner-item .content').matchHeight({
            byRow: false
        });

    }

    $('.online-tabs li').on('click', function(){
        var formItem = $(this).data('form');
        $('.online-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.form-item').removeClass('active');
        $('.' + formItem).addClass('active');
    });
    
    $(".date").flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });

});

$(window).resize(function(){

    

});