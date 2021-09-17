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
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
  // if ($(window).width() <= 1023) {
  //   $('.best-deals-slider .best-deals-item').click(function () {
  //     $(this).find('.description').slideToggle()
  //   })
  // } else {
  //   $('.best-deals-slider .best-deals-item').hover(function () {
  //     $(this).find('.description').slideToggle()
  //   })
  // }
  $(window).width() <= 1023
    ? $('.best-deals-slider .best-deals-item').click(function () {
        $(this).find('.description').slideToggle()
      })
    : $('.best-deals-slider .best-deals-item').hover(function () {
        $(this).find('.description').slideToggle()
      })

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
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  })

  $('.companies-item').matchHeight({
    byRow: false,
  })

  $('.why-leader-item .icon').matchHeight({
    byRow: false,
  })

  $('.best-deals-item .name').matchHeight({
    byRow: false,
  })

  if ($(window).width() >= 1024) {
    $('.banner-item .content').matchHeight({
      byRow: false,
    })

    $('.nav-item h4').matchHeight({
      byRow: false,
    })
  }

  $('.insurance-item .img').height($('.insurance-item .img').width() / 1.83)

  // if ($(window).width() <= 767) {
  //   $('.insurance-items').height(($('.insurance-item').height() + 10.5) * 4)
  // } else {
  //   $('.insurance-items').css({ height: 'auto' })
  // }
  if ($(window).width() < 1024) {
    $('.insurance-item .img').click(function () {
      $('ul').toggleClass('text-hover-show')
    })
  }

  // $('.insurance-cost .show-more').click(function () {
  //   var autoHeight = $('.insurance-hide').height()
  //   $('.insurance-items').toggleClass('hide')
  //   if ($('.insurance-items').hasClass('hide')) {
  //     $('.show-more').html('Еще предложения')
  //     $('.insurance-items').animate({ height: ($('.insurance-item').height() + 10.5) * 4 + 'px' }, 1000)
  //   } else {
  //     $('.show-more').html('Скрыть')
  //     //$('.hide').animate({height: autoHeight}, 1000)
  //     $('.insurance-items').animate({ height: autoHeight }, 1000)
  //   }
  //   return false
  // })

  if ($(window).width() >= 768) {
    $('.best-deals-item .img').height($('.insurance-item .img').width() / 1.12)
  } else {
    $('.best-deals-item .img').height($('.insurance-item .img').width() / 1.64)
  }

  if ($(window).width() >= 768) {
    $('.news-item .img').height($('.news-item .img').width() / 1.72)
  } else {
    $('.news-item .img').height($('.news-item .img').width() / 1.64)
  }

  $('#faq-accordion').accordionjs({
    closeAble: true,
  })
})

// $('.click-to-show').click(function (event) {
//   // $('.second-level-menu').slideToggle('slow')
//   // $('.click-to-show').toggleClass('show-list')
//   $('.click-to-show, .header-link').toggleClass('header-link_hover')
// })
// $('.click-to-show').on('click', function () {
//   $(this).next().slideToggle('slow')
//   $(this).toggleClass('show-list')
//   $(this).parent().toggleClass('header-link_hover')
// })

$(window).resize(function () {
  $('.insurance-item .img').height($('.insurance-item .img').width() / 1.83)

  if ($(window).width() < 1024) {
    $('.insurance-item .img').click(function () {
      $('ul').toggleClass('text-hover-show')
    })
  }

  if ($(window).width() <= 767) {
    $('.insurance-items').height(($('.insurance-item').height() + 10.5) * 4)
  } else {
    $('.insurance-items').css({ height: 'auto' })
  }

  if ($(window).width() >= 768) {
    $('.best-deals-item .img').height($('.insurance-item .img').width() / 1.12)
  } else {
    $('.best-deals-item .img').height($('.insurance-item .img').width() / 1.64)
  }

  if ($(window).width() >= 768) {
    $('.news-item .img').height($('.news-item .img').width() / 1.72)
  } else {
    $('.news-item .img').height($('.news-item .img').width() / 1.64)
  }
})
