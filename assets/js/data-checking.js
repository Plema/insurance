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

  $('.description-content a').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 700)
  })

  if ($(window).width() >= 1024) {
    $('.banner-item .content').matchHeight({
      byRow: false,
    })
  }

  $('.online-tabs li').on('click', function () {
    var formItem = $(this).data('form')
    $('.online-tabs li').removeClass('active')
    $(this).addClass('active')
    $('.form-item').removeClass('active')
    $('.' + formItem).addClass('active')
  })

  $('.date').flatpickr({
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
  })
})

$(window).resize(function () {})
