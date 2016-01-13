/*
*   INIT SCRIPTS
*/

$(window).ready(function() {
    applyResizeListener();
    applyNavListener();
    applyMobileDesktopConfig();
});

/*
*   COVER PAGE RESIZING
*/

function resizeCover() {
    $('.cover').css({ height: ($(window).height()) + 'px' });
}

function applyResizeListener() {
    resizeCover();
    var OS = getMobileOperatingSystem();
    if (OS != "Android" && OS != "iOS") {
        $(window).on('resize', function() {
            if ($(window).height() > 400)
                resizeCover();
        });
    }
}

/*
*   NAV BAR SCROLL SCRIPTS
*/
// controls the revealing of nav bar when scrolling from home screen
function revealNav() {
    var finalScrollPos = $('.cover').height()*.8 // the scroll position when nav is fully displayed
    var percentScrolled = $(window).scrollTop()/finalScrollPos;
    percentScrolled = percentScrolled >= 1 ? 1 : percentScrolled;
    if ($(window).width() > 800) {
        var minLeft = -90;
        var animationLen = 115; // the ammount of pixels we're animating
        var curLeft = minLeft + animationLen*percentScrolled;
        $('.masthead').css({"left":curLeft + 'px', "top": 0});
    }
    else { // for when nav bar is at top
        var minTop = -60;
        var animationLen = 60;
        var curTop = minTop + animationLen*percentScrolled;
        $('.masthead').css({"top": curTop + 'px', "left": 0});
    }
}

function applyNavListener() {
    if($(window).scrollTop() > $('.cover').height()) {
        $('.masthead').addClass('masthead-fixed');
    }
    if ($(window).scrollTop() < $('.cover').height()) {
        $('.masthead').removeClass('masthead-fixed');
        revealNav();
    }
    revealNav();
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.cover').height()) {
            $('.masthead').addClass('masthead-fixed');
        }
        if ($(window).scrollTop() < $('.cover').height()) {
            $('.masthead').removeClass('masthead-fixed');
            revealNav();
        }
    });
    $(window).on('resize', function() {
        revealNav();
    });
}

/*
*   SMOOTH SCROLL
*/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
});


/**
   * Determine the mobile operating system.
    * This function either returns 'iOS', 'Android' or 'unknown'
     *
      * @returns {String}
       */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
        return 'iOS';
    }
    else if( userAgent.match( /Android/i ) )
    {
        return 'Android';
    }
    else
    {
        return 'unknown';
    }
}

// This function detects the OS and styles certain CSS elements dynamically
function applyMobileDesktopConfig() {
    var OS = getMobileOperatingSystem();
    if (OS == "iOS" || OS == "Android") {
        $('#navHeader').addClass('masthead-nav-mobile');
    }
    else {
        $('#navHeader').addClass('masthead-nav-desktop');
    }
} 
