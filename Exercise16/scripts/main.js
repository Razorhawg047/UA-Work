$(document).ready(function(){

    //Part 2
    $('#btnShow').on('click',show);
    function show(){
        $('.display-basic').show();
    };
    $('#btnHide').on('click',hide);
    function hide(){
        $('.display-basic').hide();
    };
    $('#btnToggle').on('click',toggle);
    function toggle(){
        $('.display-basic').toggle();
    };

    //Part 3
    $('.part3').show();

    //Part 4
    $('#btnFadeIn').on('click',fadeIn);
    function fadeIn(){
        $('.display-fade').fadeIn('fast');
    };
    $('#btnFadeOut').on('click',fadeOut);
    function fadeOut(){
        $('.display-fade').fadeOut('slow');
    };
    $('#btnFadeToggle').on('click',fadeToggle);
    function fadeToggle(){
        $('.display-fade').fadeToggle();
    };

    //Part4
    $('#btnSlideDown').on('click',slideDown);
    function slideDown(){
        $('.display-slide').slideDown(1000);
    };
    $('#btnSlideUp').on('click',slideUp);
    function slideUp(){
        $('.display-slide').slideUp(500);
    };
    $('#btnSlideToggle').on('click',slideToggle);
    function slideToggle(){
        $('.display-slide').slideToggle();
    };
});