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

  $('.best-deals-slider').slick({
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
      responsive: [
          {
            breakpoint: 1280,
            settings: {
              dots: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
            }
          },
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
            }
          }
      ]
  });

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

  $('.why-leader-item .icon').matchHeight({
      byRow: false
  }); 
  
  $('.companies-item').matchHeight({
    byRow: false
}); 

  $('.best-deals-item .name').matchHeight({
      byRow: false
  }); 

  $('.clients-tabs li').on('click', function(){
    var formItem = $(this).data('group');
    $('.clients-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.insurance-content').removeClass('active');
    $('.' + formItem).addClass('active');
  });

  $('.information-tabs li').on('click', function(){
      var formItem = $(this).data('group');
      $('.information-tabs li').removeClass('active');
      $(this).addClass('active');
      $('.informations').removeClass('active');
      $('.' + formItem).addClass('active');
  });

  $('.online-tabs li').on('click', function(){
    var formItem = $(this).data('form');
    $('.online-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.form-item').removeClass('active');
    $('.' + formItem).addClass('active');
  });

  $('.buttons a').on('click', function(){
    
    $(this).parent().parent().next().slideToggle();
    $(this).toggleClass('active');

  })

  if($(window).width() >= 1024){

      $('.banner-item .content').matchHeight({
          byRow: false
      }); 

      $('.nav-item h4').matchHeight({
          byRow: false
      }); 

    }
  $('.insurance-item .img').height( $('.insurance-item .img').width() / 1.83 );

  $('.insurance-cost .show-more').click(function(){
    var autoHeight = $('.insurance-hide').height();
  $('.insurance-items').toggleClass('hide');	
  if ($('.insurance-items').hasClass('hide')) {
          $('.show-more').html('Еще предложения');
          $('.insurance-items').animate({height: ( $('.insurance-item').height() + 10.5 ) * 4 + 'px'}, 1000)
  } else {
          $('.show-more').html('Скрыть');
          //$('.hide').animate({height: autoHeight}, 1000)
          $('.insurance-items').animate({height: autoHeight}, 1000);
  }		
  return false;
  });

    if($(window).width() >= 768){
        $('.best-deals-item .img').height( $('.best-deals-item .img').width() / 1.12 );
      }else{
        $('.best-deals-item .img').height( $('.best-deals-item .img').width() / 1.64 );
      }

      if($(window).width() >= 768){
        $('.news-item .img').height( $('.news-item .img').width() / 1.72 );
      }else{
        $('.news-item .img').height( $('.news-item .img').width() / 1.64 );
      }

      $("#faq-accordion").accordionjs({
        closeAble: true,
    });

    
});



$(window).resize(function(){

  $('.insurance-item .img').height( $('.insurance-item .img').width() / 1.83 );   
    
  if($(window).width() <= 767){
    $('.insurance-items').height( ( $('.insurance-item').height() + 10.5 ) * 4 );
  }else{
    $('.insurance-items').css({height: 'auto'})
  }

  if($(window).width() >= 768){
      $('.best-deals-item .img').height( $('.best-deals-item .img').width() / 1.12 );
  }else{
      $('.best-deals-item .img').height( $('.best-deals-item .img').width() / 1.64 );
  }

  if($(window).width() >= 768){
      $('.news-item .img').height( $('.news-item .img').width() / 1.72 );
    }else{
      $('.news-item .img').height( $('.news-item .img').width() / 1.64 );
    }
})

