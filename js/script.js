/*
*   INIT SCRIPTS
*/

$(window).ready(function() {
    applySelectListener();
    applyCoverListener();
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
        resizeCover();
    });
}

/*
*   FOR NAV BAR INDICATOR LINE
*/

function setSelectedNav () {
    var href = window.location.href;
    var phpName = href.substr(href.lastIndexOf('/') + 1);
    if (phpName == "") {
        document.getElementById("navHeader").children[0].setAttribute("class", "active");
    }
    else {
        // the header elements of li
        var navHeaderEls = document.getElementById("navHeader").children;
        var selectedLiEl;
        for (var i = 0; i < navHeaderEls.length; ++i) {
            navHeaderEls[i].setAttribute("class", "");
            if (navHeaderEls[i].children[0].getAttribute("href") == phpName)
                selectedLiEl = navHeaderEls[i];
        }
        selectedLiEl.setAttribute("class", "active");
    }
}

function applySelectListener() {
    setSelectedNav();
    $(window).on('hashchange', function() {
        setSelectedNav();
    });
}
