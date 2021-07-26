$(document).ready(function () {
  $('.banner-slider').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplaySpeed: 15000,
    infinity: true,
    nextArrow:
      '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
    prevArrow:
      '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
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

  if ($(window).width() >= 1024) {
    $('.banner-item .content').matchHeight({
      byRow: false,
    })
  }

  $('.personal-items').showmore({
    closedHeight: 525,
    buttonTextMore: 'Еще опции',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.shares-items').showmore({
    closedHeight: 635,
    buttonTextMore: 'Еще акции',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.shares-item .img').height($('.shares-item .img').width() / 1.85)

  $('.legal-services-item .img').height(
    $('.legal-services-item .img').width() / 1.12
  )

  $('.legal-services-item .text').matchHeight({
    byRow: false,
  })

  $('.date').flatpickr({
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
  })

  $('.news-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow:
      '<button class="slick-arrow next"><i class="icon-arrow-next"></i></button>',
    prevArrow:
      '<button class="slick-arrow prev"><i class="icon-arrow-prev"></i></button>',
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

  if ($(window).width() >= 768) {
    $('.news-item .img').height($('.news-item .img').width() / 1.72)
  } else {
    $('.news-item .img').height($('.news-item .img').width() / 1.25)
  }

  $('.personal-area-information .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.personal-area-actual .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  if ($(window).width() >= 768) {
    $('.detailed-item .img').height($('.detailed-item .img').width() / 1.55)
  } else {
    $('.detailed-item .img').height($('.detailed-item .img').width() / 1.3)
  }

  $('.information-news-content .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.information-news-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
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

  if ($(window).width() >= 768) {
    $('.information-news-slider .img').height(
      $('.information-news-slider .img').width() / 1.72
    )
  } else {
    $('.information-news-slider .img').height(
      $('.information-news-slider .img').width() / 1.25
    )
  }

  $('.presentation-content .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.presentation-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
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

  if ($(window).width() >= 768) {
    $('.presentation-slider .img').height(
      $('.presentation-slider .img').width() / 1.72
    )
  } else {
    $('.presentation-slider .img').height(
      $('.presentation-slider .img').width() / 1.25
    )
  }

  $('.video-webinars-content .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.video-webinars-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
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

  if ($(window).width() >= 768) {
    $('.video-webinars-slider .img').height(
      $('.video-webinars-slider .img').width() / 1.72
    )
  } else {
    $('.video-webinars-slider .img').height(
      $('.video-webinars-slider .img').width() / 1.25
    )
  }

  $('.personal-area-reporting .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })

  $('.personal-area-order .text').showmore({
    closedHeight: 320,
    buttonTextMore: 'Подробнее',
    buttonTextLess: 'Скрыть',
    buttonCssClass: 'showmore-button',
    animationSpeed: 0.5,
    onlyWithWindowMaxWidth: 767,
  })
})

$(window).resize(function () {
  $('.shares-item .img').height($('.shares-item .img').width() / 1.85)

  $('.legal-services-item .img').height(
    $('.legal-services-item .img').width() / 1.12
  )

  if ($(window).width() >= 768) {
    $('.news-item .img').height($('.news-item .img').width() / 1.72)
  } else {
    $('.news-item .img').height($('.news-item .img').width() / 1.25)
  }

  if ($(window).width() >= 768) {
    $('.detailed-item .img').height($('.detailed-item .img').width() / 1.55)
  } else {
    $('.detailed-item .img').height($('.detailed-item .img').width() / 1.3)
  }

  if ($(window).width() >= 768) {
    $('.information-news-slider .img').height(
      $('.information-news-slider .img').width() / 1.72
    )
  } else {
    $('.information-news-slider .img').height(
      $('.information-news-slider .img').width() / 1.25
    )
  }

  if ($(window).width() >= 768) {
    $('.presentation-slider .img').height(
      $('.presentation-slider .img').width() / 1.72
    )
  } else {
    $('.presentation-slider .img').height(
      $('.presentation-slider .img').width() / 1.25
    )
  }

  if ($(window).width() >= 768) {
    $('.video-webinars-slider .img').height(
      $('.video-webinars-slider .img').width() / 1.72
    )
  } else {
    $('.video-webinars-slider .img').height(
      $('.video-webinars-slider .img').width() / 1.25
    )
  }
})
