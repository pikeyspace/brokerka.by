// Script for return-to-top button
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $('#top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 700);
    });
});

// Slow motion on-click menu
$(document).ready(function() {
    $(".menu-item").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top,
            offset = $('header').innerHeight();
        $('body,html').animate({ scrollTop: top - offset }, 1500);
    });
});

// Script for slider
$('.slider').slick({
    dots: true,
    speed: 3000,
    // autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
});

// Script for tabs
(function($) {
    $(function() {
        $("ul.tabs-caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs-content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);

// Script for "Tabs for gadgets"
$('.media-item').click(function() {
    $(this).siblings().find('.media-content').slideUp(2000);
    $(this).find('.media-content').slideDown(2000);
    $(this).find('.seeMore').hide(2000);
    $(this).siblings().find('.seeMore').show(2000);
});

// Script for mail-form
$(".form-for-js").submit(function() {
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "http://brokerka.by/mail.php",
        data: th.serialize()
    }).done(function() {
        alert("Отправить сообщение");
        setTimeout(function() {
            th.trigger("reset");
        }, 1000);
    });
    return false;
});

//Script copy e-mail on-click
$('.e-mail').click(function() {
    var $text_copy = $(this);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($text_copy.text()).select();
    $temp.remove();
    $('.copy-mail-allert').fadeIn(400);
    setTimeout(function() { $('.copy-mail-allert').fadeOut(400); }, 2000);
});