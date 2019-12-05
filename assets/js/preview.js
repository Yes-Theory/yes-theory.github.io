$(function() {
    isMobile = $(window).width() < 1440;

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
        $('main .pages .map map svg path').click((event)=>{
            if(isMobile && !$('main .pages .map').hasClass('choose')){
                return;
            }
            $this = $(event.currentTarget);
            $('main .pages .map map svg path').addClass('interact');
            $('main .pages .map map svg path').removeClass('active');
            $this.addClass('active');
            $('#stateGroups').carousel($('#stateGroups').find('.' + $this.attr('id')).data('pos'));
        });
    }
    function page_change(){
        setTimeout(()=>{ //wait for the new page to load
            var current_page_title = $('.pages > div.active > *').attr('page-title')
            $('header h1 small').html(current_page_title);
        }, 400);
    }
});