$(function() {
    isMobile = /Mobi/.test(navigator.userAgent);
    $('main .pages .map').click((event)=>{
        if(isMobile){
            $(event.currentTarget).toggleClass('choose');
        }
    });
});