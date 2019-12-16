$(function() {
    isMobile = $(window).width() < 1440;
    isTouch = $(window).width() < 992;

    init();
    function init(){
        pages();
        safariFix();
    }
    function pages(){
        countryPage();
        overviewPage();
    }
    function countryPage(){
        if($('body').hasClass('page-country')){
            pageChange();
            events();
            !isTouch ? $('#stateGroups').carousel() : false;
            calendar();
        }
    }
    function overviewPage(){
        if($('body').hasClass('page-overview')){
            var selectCountry = $('#select-country').selectize();
            selectCountry.on('change',(event)=>{
                switch($(event.currentTarget).find('option').attr('value')){
                    case 'IN': window.location.href = "/india";
                    break;
                    case 'GB': window.location.href = "/uk";
                    break;
                    case 'DE': window.location.href = "/germany";
                    break;
                }
            });
        }
    }
    function events(){
        $('main .pages .map').click((event)=>{
            if(isTouch){
                $(event.currentTarget).toggleClass('choose');
            }
        });
        $('main nav a').click(()=>{
            pageChange();
        });
        $('main .pages .map map svg path').click((event)=>{
            if(isTouch && !$('main .pages .map').hasClass('choose')){
                return;
            }
            console.log(event.currentTarget);
            $this = $('main .pages .map map svg path#' + $(event.currentTarget).attr('id'));
            $('main .pages .map map svg path').addClass('interact');
            $('main .pages .box .box-content .carousel-item').addClass('interact');
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
        $('main .pages .box .box-content h2').click((event)=>{
            $('main .pages .map map svg path').removeClass('active');
            $('main .pages .box .box-content .carousel-item').addClass('interact');
            $('main .pages .box .box-content .carousel-item').removeClass('active');
            $(event.currentTarget).parent().addClass('active');
        });
        $('main .pages .map map svg path').on('mouseover',(event)=>{
            $this = $('main .pages .map map svg path#' + $(event.currentTarget).attr('id'));
            $this.addClass('hover');
        });
        $('main .pages .map map svg path').on('mouseout',(event)=>{
            $this = $('main .pages .map map svg path#' + $(event.currentTarget).attr('id'));
            $this.removeClass('hover');
        });
    }
    function pageChange(){
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
        var webpMachine = new webpHero.WebpMachine();
        webpMachine.polyfillDocument();
        var isSafari = window.safari !== undefined;
        if(isSafari){
            $('body').addClass('safari');
            $('body').append(`
            <div class="modal safari-support" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Safari support</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Safari is currently not supported please use Firefox or Chrome.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            `);
            $('.safari-support').modal();
        }
    }

});