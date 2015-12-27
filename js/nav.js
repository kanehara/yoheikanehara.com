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

$(window).on('hashchange', function() {
    setSelectedNav();
});

setSelectedNav();
