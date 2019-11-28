$(function() {
    isMobile = /Mobi/.test(navigator.userAgent);
    $('main .pages .map').click((event)=>{
        if(isMobile){
            $(event.target).toggleClass('choose');
        }
    });
});