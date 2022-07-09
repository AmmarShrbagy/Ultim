// Show Nav
$(function () {
    $('.btn-show-nav').click(function () { 
        $('.btn-show-nav').toggleClass('show');
        $('nav').toggleClass('show')
    });
});

// Header
$(function () {
    $(document).scroll(function () { 
        if ($(document).scrollTop() >= 100) {
            $('header').addClass('header-scroling')
        }else if ($(document).scrollTop() <= 100) {
            $('header').removeClass('header-scroling')
        }
    });
});