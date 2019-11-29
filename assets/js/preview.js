$(function() {
    isMobile = $(window).width() < 992;

    init();
    function init(){
        page_change();
        events();
    }
    function events(){
        $('main .pages .map').click((event)=>{
            if(isMobile){
                $(event.currentTarget).toggleClass('choose');
            }
        });
        $('main nav a').click(()=>{
            page_change();
        });
    }
    function page_change(){
        var current_page_title = $('.pages > div.active > *').attr('page-title')
        $('header h1 small').html(current_page_title);
    }
});