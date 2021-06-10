$(document).ready(function() {
    $('#video-button--1').on('click', function() {
        $('#video-1').css('display', 'block');
        $('#video-2').css('display', 'none');
        $('#video-3').css('display', 'none');
        $('#video-4').css('display', 'none');
        $('#video-5').css('display', 'none');
        $("iframe#video-1").attr("src", $("iframe#video-1").attr("src").replace("autoplay=0", "autoplay=1"));
    })
    $('#video-button--2').on('click', function() {
        $('#video-1').css('display', 'none');
        $('#video-2').css('display', 'block');
        $('#video-3').css('display', 'none');
        $('#video-4').css('display', 'none');
        $('#video-5').css('display', 'none');
        $("iframe#video-2").attr("src", $("iframe#video-2").attr("src").replace("autoplay=0", "autoplay=1"));
    })
    $('#video-button--3').on('click', function() {
        $('#video-1').css('display', 'none');
        $('#video-2').css('display', 'none');
        $('#video-3').css('display', 'block');
        $('#video-4').css('display', 'none');
        $('#video-5').css('display', 'none');
        $("iframe#video-3").attr("src", $("iframe#video-3").attr("src").replace("autoplay=0", "autoplay=1"));
    })
    $('#video-button--4').on('click', function() {
        $('#video-1').css('display', 'none');
        $('#video-2').css('display', 'none');
        $('#video-3').css('display', 'none');
        $('#video-4').css('display', 'block');
        $('#video-5').css('display', 'none');
        $("iframe#video-4").attr("src", $("iframe#video-4").attr("src").replace("autoplay=0", "autoplay=1"));
    })
    $('#video-button--5').on('click', function() {
        $('#video-1').css('display', 'none');
        $('#video-2').css('display', 'none');
        $('#video-3').css('display', 'none');
        $('#video-4').css('display', 'none');
        $('#video-5').css('display', 'block');
        $("iframe#video-5").attr("src", $("iframe#video-5").attr("src").replace("autoplay=0", "autoplay=1"));
    })
})