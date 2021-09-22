$(document).ready(function () {
  $('.shares-item .img').height($('.shares-item .img').width() / 1.85)

  // if ($(window).width() < 1024) {
  //   $('.shares-item .img').click(function () {
  //     $(this).next().toggleClass('text-hover-show')
  //   })
  // }
  if ($(window).width() < 1024) {
    $('.shares-item .img').click(function () {
      if ($(this).next().hasClass('text-hover-show')) {
        $('.shares-item .text').removeClass('text-hover-show')
      } else {
        $('.shares-item .text').removeClass('text-hover-show')
        $(this).next().addClass('text-hover-show')
      }
    })
  }

  if ($(window).width() >= 768) {
    $('.shares-item .text h5').matchHeight({
      byRow: true,
    })
  }
})

$(window).resize(function () {
  $('.shares-item .img').height($('.shares-item .img').width() / 1.85)
})
