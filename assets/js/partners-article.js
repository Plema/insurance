$(document).ready(function () {
  $('.companies-slider').slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    waitForAtimation: false,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    swipe: false,
    initialSlide: 5,
    touchMove: false,
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
})

$(window).resize(function () {})
