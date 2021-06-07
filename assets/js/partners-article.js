$(document).ready(function(){
   
  $('.companies-slider').slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    playSpeed: 4000,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 4,
          }
        }
    ]
});
$(window).blur(function() { 
  $('.companies-slider').slick('slickPause')
}); //Покинули вкладку
$(window).focus(function() { 
  $('.companies-slider').slick('slickPlay')
}); //Во вкладке 


    $('.companies-item').matchHeight({
        byRow: false
    }); 
    
});

$(window).resize(function(){

    

});