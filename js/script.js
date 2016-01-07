/*
*   INIT SCRIPTS
*/

$(window).ready(function() {
    applyCoverListener();
    applyNavListener();
});

/*
*   RESIZING COVER PAGE
*/

function resizeCover() {
    $('.cover').css({ height: ($(window).height()) + 'px' });
}

function applyCoverListener() {
    resizeCover();
    $(window).on('resize', function() {
        if ($(window).height() > 400)
            resizeCover();
    });
}

/*
*   NAV BAR SCROLL SCRIPTS
*/
function triggerShowNav() {
    
}

function triggerHideNav() {

}

function applyNavListener() {
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.cover').height()) {
            $('.masthead').addClass('masthead-fixed');
            triggerShowNav();
        }
        if ($(window).scrollTop() < $('.cover').height()) {
            $('.masthead').removeClass('masthead-fixed');
            triggerHideNav();
        }
    });
}

