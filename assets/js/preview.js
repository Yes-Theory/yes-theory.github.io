$(function() {
    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    $('main .pages .map').click((event)=>{
        if($.browser == 'device'){
            $(event.target).toggleClass('choose');
        }
    });
});