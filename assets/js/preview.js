$(function() {
    isMobile = $(window).width() < 992;
    $('main .pages .map').click((event)=>{
        if(isMobile){
            $(event.currentTarget).toggleClass('choose');
        }
    });
});