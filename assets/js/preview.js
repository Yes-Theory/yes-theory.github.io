$(function() {
    isMobile = $(window).width() < 992;
    $('main .pages .map').click((event)=>{
        if(isMobile){
            $(event.currentTarget).toggleClass('choose');
        }
    });
    $( "main nav a" ).click(()=>{
        $('main .pages').toggleClass('changing-page');
        setTimeout(()=>{
            $('main .pages').toggleClass('changing-page');
        }, 500);
    });
});