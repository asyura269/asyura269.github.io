// event pada saat klik tombol
$('.page-scroll').on('click', function(e){
    var target = $(this).attr('href');
    var elemenTarget = $(target);
    
    $('html, body').animate({
        scrollTop: elemenTarget.offset().top-50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});

// parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+wScroll/8+'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wScroll/1.5+'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wScroll+'%)'
    });
    // End Jumbotron

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 450) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 200 * (i+1));
        });
    }
    // End Portfolio

    // About
    if (wScroll > $('.about').offset().top -969) {
        $('.pKiri').addClass('tampil');
        $('.pKanan').addClass('tampil');
        $('.about img').addClass('tampil');
    }
    // End About

});

$(window).on('load', function(){
    $('.jumbotron img').addClass('tampil');
    $('.jumbotron h1').addClass('tampil');
    setTimeout(function(){
        $('.jumbotron p').addClass('tampil');
    }, 1500);    
});