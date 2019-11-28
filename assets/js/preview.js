$(function() {
    isMobile = /Mobi/.test(navigator.userAgent);
    $('main .pages .map').click((event)=>{
        if(isMobile){
            $('main .pages .map').toggleClass('choose');
        }
    });
});