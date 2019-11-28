$(function() {
    $('main .pages .map').click((event)=>{
        if(isMobile){
            $(event.target).toggleClass('choose');
        }
    });
});