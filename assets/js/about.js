$(document).ready(function () {
  $('.companies-slider').slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    waitForAtimation: false,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    initialSlide: 5,
    // nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
    // prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 4,
          speed: 25000,
        },
      },
    ],
  })
  // $(window).blur(function () {
  //   $('.companies-slider').slick('slickPause')
  // }) //Покинули вкладку
  // $(window).focus(function () {
  //   $('.companies-slider').slick('slickPlay')
  // }) //Во вкладке
  $(window).resize(function () {
    $('.companies-slider').slick('setPosition')
  })
  $('.companies-item').matchHeight({
    byRow: false,
  })

  $('.beneficial-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  })

  $('.beneficial-item .text h4').matchHeight({
    byRow: false,
  })

  $('.beneficial-item .img').height($('.beneficial-item .img').width() / 1.07)
})

$(window).resize(function () {
  $('.beneficial-item .img').height($('.beneficial-item .img').width() / 1.07)
})
