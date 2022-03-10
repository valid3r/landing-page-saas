//JQuery Module Pattern
// An object literal
var app = {
  init: function () {
    app.functionOne()
  },
  functionOne: function () {},
}
$('document').ready(function () {
  app.init()

  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    // ... more custom settings?
  })

  // Start Mobile Nav Function
  $('.hamburger-menu, .close-menu').click(function () {
    $('.mobile-nav').toggle()
  })
  // End Mobile Name

  // Start Sticky Header on Scroll Up
  var lastScrollTop = 0
  $(window).scroll(function (event) {
    var st = $(this).scrollTop()
    var scrollPosition = window.pageYOffset
    var windowSize = window.innerHeight
    var bodyHeight = document.body.offsetHeight
    var offsetFromBottom = bodyHeight - (scrollPosition + windowSize)

    if (offsetFromBottom > 200) {
      if (st < 5) {
        $('nav.nav-section, body').removeClass('fixed')
      } else {
        if (st < lastScrollTop) {
          $('nav.nav-section, body').addClass('fixed')
        } else {
          $('nav.nav-section, body').removeClass('fixed')
        }
      }
    }

    lastScrollTop = st
  })

  // End Sticky Header on Scroll Up
})
