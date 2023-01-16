jQuery(document).ready(function($) { 


    /* Hamburger */
    $('.hamburger').click(function() {
        $('.hamburger span').toggleClass('close');
        $('#header-menu #menu').toggleClass('showMenu');
        $('#header-menu #menu').toggleClass('d-none');
        $('body').toggleClass('no-scroll');
        // Quando chiudo l'hamburger chiudo anche il sottomenu se aperto
        //var is_close = $('.hamburger span').hasClass('close');
    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 300) {
            $('#toTop').addClass('show');
        } else {
            $('#toTop').removeClass('show');
        }
    });

    $('#toTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
  
    // Milestone: animation left and right //
    var pageResume = $('body').hasClass('page-template-tpl-resume');
    var section_Miles = $('section').hasClass('flexible_milestones');
    var $animation_elements = $('.showOnScroll');
    var $animation_elements2 = $('.showOnScrollSlow');
    var $window = $(window);

    if (pageResume && section_Miles)    {
        $(window).on('scroll resize', check_if_in_view);
        $(window).trigger('scroll');
    }

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });

        $.each($animation_elements2, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view-slow');
            } else {
                $element.removeClass('in-view-slow');
            }
        });
    }

    //var pageContacts = $('body').hasClass('page-template-tpl-contacts');
    //var span = document.getElementById('rollnumber');

    /*if (pageContacts) {
        document.getElementById('rollnumber').addEventListener('mouseover', animateValue(document.getElementById('rollnumber'), 0, 40, 3000));
    }*/
});

/*
function animateValue(obj, start, end, duration) {
    if (obj) {

        // save starting text for later (and as a fallback text if JS not running and/or google)
        var textStarting = obj.innerHTML;
        // remove non-numeric from starting text if not specified
        end = end || parseInt(textStarting.replace(/\D/g, ""));
        var range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));
        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            // replace numeric digits only in the original string
            obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }
}
*/
  

