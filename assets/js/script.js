$(document).ready(function () {
  jcf.replaceAll()

  // $(window).resize(function () {
  //   if ($(window).width() < 1024) {
  //     $('.insurance-item .img').click(function () {
  //       $('ul').toggleClass('text-hover-show')
  //     })
  //   }
  // })

  // if ($(window).width() < 1024) {
  //   $('.insurance-item .img').click(function () {
  //     $('ul').toggleClass('text-hover-show')
  //   })
  // }

  $('.selector-tabs div').on('click', function () {
    var formItem = $(this).data('group')
    $('.selector-tabs div').removeClass('active')
    $(this).addClass('active')
    $('form').removeClass('active')
    $('.' + formItem).addClass('active')
  })

  $('.close-popup').click(function (event) {
    console.log('thanks')
    $('.popup').removeClass('open-popup')
    $('.dark-display').removeClass('open-popup')
  })

  $('.dark-display').click(function (event) {
    $('.popup').removeClass('open-popup')
    $('.dark-display').removeClass('open-popup')
  })

  $('.open-menu').click(function () {
    $('.mobile-menu').toggleClass('active')
  })

  // Popups

  $('.hot-offer-content button').on('click', function () {
    $('.thanks').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.faq button').on('click', function () {
    $('.thanks').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.feedback').on('click', function () {
    $('.write-me').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.question-content button').on('click', function () {
    $('.thanks').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.money-easy a').on('click', function () {
    $('.become-partner').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.job-benefits .job-benefits-become a').on('click', function () {
    $('.become-partner').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.request').on('click', function () {
    $('.request-offer').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.personal-area-order-form button').on('click', function () {
    $('.thanks').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  //   $('.send-calculation').on('click', function () {
  //     $('.thanks').addClass('open-popup')
  //     $('.dark-display').addClass('open-popup')
  //   })

  $('.apply-policy-online button').on('click', function () {
    $('.dev-error').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  $('.apply-policy-with-delivery button').on('click', function () {
    $('.thanks').addClass('open-popup')
    $('.dark-display').addClass('open-popup')
  })

  // $('.calculate-green-card button').on('click', function(){
  //     $('.thanks').addClass('open-popup');
  //     $('.dark-display').addClass('open-popup')
  // })

  $('.header-nav li').hover(function () {
    $(this).find('.dropdown').toggleClass('active')
  })
  $('.dropdown li').hover(function () {
    $(this).find('ul').toggleClass('active')
  })
  // $('.click-to-show').click(function () {
  //   $('.dropdown-menu').toggleClass('show-menu')
  // })
  $('.click-to-show').on('click', function () {
    $(this).next().slideToggle('slow')
    $(this).toggleClass('show-list')
    $(this).parent().toggleClass('header-link_hover')
  })
  let vh = window.innerHeight * 0.01
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
