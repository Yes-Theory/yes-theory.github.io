$(function() {
    isMobile = $(window).width() < 1440;
    isTouch = $(window).width() < 992;

    init();
    function init(){
        page_change();
        events();
        !isTouch ? $('#stateGroups').carousel() : false;
        calendar();
        safariFix();
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
            var stateGroupElement = $('#stateGroups').find('.' + $this.attr('id'));
            $('#stateGroups').carousel(stateGroupElement.data('pos'));
            if(isTouch){
                if(stateGroupElement.length > 0){
                    $(window).scrollTop(stateGroupElement.offset().top - 60);
                }
            }
        });
    }
    function page_change(){
        setTimeout(()=>{ //wait for the new page to load
            var current_page_title = $('.pages > div.active > *').attr('page-title')
            $('header h1 small').html(current_page_title);
        }, 400);
    }
    function calendar(){
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        $('.event-calendar').gCalReader({
            calendarId: $('.event-calendar').data('calendar-id'),
            apiKey: 'AIzaSyDNc-mzVL4eCvrRS-csFnJQbebcIJ1mZkQ',
            errorMsg: 'Sorry there are currently no events.',
            maxEvents: 25,
            futureEventsOnly: true,
            sortDescending: false,
            renderFunc: (eventdate, summary, description, location) => {
                var eventHtml = "<div class='meetup'>";
                eventHtml += '<h3>' + summary + '</h3>';
                eventHtml += "<span class='location'>" + location + '</span>';
                eventHtml += "<span class='date'>" + new Date(eventdate).toLocaleDateString(undefined, dateOptions) + '</span>';
                eventHtml += '<p>' + description + '</p>';
                eventHtml += '</div>';
                return eventHtml;
            }
        });
    }
    function safariFix(){
        var webpMachine = new webpHero.WebpMachine()
	    webpMachine.polyfillDocument()
    }
});