$('.play-button').on('click', function () {
    $(this).hide();
    $(this).parent().fadeOut();
    $(this).parent().siblings('.slider-video')[0].play();
});

$('.slider-video').on('play', function () {
    $(this).attr('controls', '1');
});

// Additionnal code for the slider
var pos = 0,
    slides = $('.slider'),
    numOfSlides = slides.length;

function nextSlide(){
    stopCurrentVideo();
    slides.eq(pos).animate({left:'-100%'},1000);
    pos = pos >= numOfSlides-1 ? 0 : ++pos;
    slides.eq(pos).css({left:'100%'}).animate({left:0},1000);
}

function previousSlide(){
    stopCurrentVideo();
    slides.eq(pos).animate({left:'100%'},1000);
    pos = pos == 0 ? numOfSlides-1 : --pos;
    slides.eq(pos).css({left:'-100%'}).animate({left:0},1000);
}

function stopCurrentVideo(){
    $('.slider-video:eq('+pos+')').load().removeAttr('controls')
    .siblings('.overlay-content').show().find('.play-button').show();
}

$('.left').click(previousSlide);
$('.right').click(nextSlide);