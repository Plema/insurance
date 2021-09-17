$(document).ready(function () {
  $('.banner-slider').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplaySpeed: 10000,
    speed: 1000,
    infinity: true,
    waitForAtimation: true,
    cssEase: 'linear',
    pauseOnHover: false,
    nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
    prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          adaptiveHeight: true,
        },
      },
    ],
  })

  $('.banner-slider').hover(
    function () {
      $(this).find('.next').css('right', '10px')
      $(this).find('.prev').css('left', '10px')
    },
    function () {
      $(this).find('.next').css('right', '-100%')
      $(this).find('.prev').css('left', '-100%')
    }
  )

  // $(window).blur(function () {
  //   $('.banner-slider').slick('slickPause')
  // }) //Покинули вкладку
  // $(window).focus(function () {
  //   $('.banner-slider').slick('slickPlay')
  // }) //Во вкладке

  if ($(window).width() >= 1024) {
    $('.banner-item .content').matchHeight({
      byRow: false,
    })
  }

  $('.partners-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
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

  $('.partners-item .img').height($('.partners-item .img').width() / 1.25)

  if ($(window).width() >= 768) {
    $('.partners-item .text h4').matchHeight({
      byRow: false,
    })

    $('.partners-item .img').height($('.partners-item .img').width() / 1.7)
  }

  $('.cooperation-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
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

  $('.cooperation-item .text h4').matchHeight({
    byRow: false,
  })

  $('.cooperation-item .img').height($('.cooperation-item .img').width() / 0.95)

  if ($(window).width() >= 768) {
    $('.cooperation-item .img').height($('.cooperation-item .img').width() / 1.2)
  }

  $('.who-more').on('click', function () {
    $('.who-it-content .content').toggleClass('open')
  })

  $('.earn-slider').slick({
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

  $('.earn-item .text h4').matchHeight({
    byRow: false,
  })

  if ($(window).width() >= 768) {
    $('.earn-item .text p').matchHeight({
      byRow: false,
    })
  }

  $('.earn-item .img').height($('.earn-item .img').width() / 1.07)

  $('#my-accordion').accordionjs({
    closeAble: false,
    slideSpeed: 900,
    scroll: false,

    animated: 'easeslide',
  })

  $('.start-work-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})

$(window).resize(function () {
  $('.partners-item .img').height($('.partners-item .img').width() / 1.25)

  if ($(window).width() >= 768) {
    $('.partners-item .img').height($('.partners-item .img').width() / 1.7)

    $('.cooperation-item .img').height($('.cooperation-item .img').width() / 1.2)
  }

  $('.cooperation-item .img').height($('.cooperation-item .img').width() / 0.95)

  $('.earn-item .img').height($('.earn-item .img').width() / 1.07)
})
