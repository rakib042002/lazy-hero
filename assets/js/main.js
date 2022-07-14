(function ($) {

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.menu-area').addClass('fixd-menu');
    }
    else {
        $('.menu-area').removeClass('fixd-menu');
    }
});

        $('a.smooth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});

}(jQuery));	