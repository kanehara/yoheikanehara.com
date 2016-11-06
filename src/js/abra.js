// The MIT License (MIT)

// abra.js | Copyright (c) 2016 Yohei Kanehara | www.yoheikanehara.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// load abra
$(window).ready(function() {
    initAbraAppear();
    initAbraType();
    applyAbraListeners();
});

/*
*    APPEAR TRANSITION
*/

function initAbraAppear() {
    for (var i = 0; i < $('.abraAppear').size(); ++i) {
        var el = $('.abraAppear')[i];
        el.classList.add('abraTransparent');
    }
    for (var i = 0; i < $('.abraAppearHr').size(); ++i) {
        var el = $('.abraAppearHr')[i];
        el.classList.add('abraTransparent');
    }
}

function applyAbraListeners() {
    applyAbraAppear();
    applyAbraType();
    $(window).scroll(function() {
        applyAbraAppear();
        applyAbraType();
    });
}

function applyAbraAppear() {
    for (var i = 0; i < $('.abraAppear').size(); ++i) {
        var $el = $('.abraAppear')[i];
        if (isInView($el)) {
            $el.classList.remove('abraTransparent');
            $el.classList.add('abraAppearTrans');
        }
    }
    for (var i = 0; i < $('.abraAppearHr').size(); ++i) {
        var $el = $('.abraAppearHr')[i];
        if (isInView($el)) {
            $el.classList.remove('abraTransparent');
            $el.classList.add('abraAppearTransHr');
        }
    }
}

/*
*    TYPING TRANSITION
*/
var ABRA_abraTypeStrings = {}; // used to store abraType objects
var ABRA_abraTypeSpeed = 8;
// in typed.js - max random seed to generate "humanize" value
// used later to adjust startDelay so only one string is typed on screen at a time
// ! CHANGE THIS VALUE IF CHANGING RANDOM SEED GENERATOR FOR "humanize" VAR IN TYPED.JS !
var ABRA_maxTypedRandSeed = 70; 

function initAbraType() {
    // store the abra type strings and set inner text to ""
    var abraTypeEls = document.getElementsByClassName('abraType');
    for (var i = 0; i < abraTypeEls.length; ++i) {
        var el = abraTypeEls[i];
        ABRA_abraTypeStrings[el.id] = el.innerHTML;
        el.innerHTML = '';
    }
}

function applyAbraType() {
    var abraTypeWrapEls = $('.abraTypeWrap');
    for (var i = 0; i < abraTypeWrapEls.length; ++i) {
        var abraTypeEls = $('.abraTypeWrap:eq(' + i + ')').find('.abraType');
        var stringBuffer= "";
        for (var j = 0; j < abraTypeEls.length; ++j) {                
            if (isInView(abraTypeWrapEls[i])) {
                var abraTypeElId = abraTypeEls[j].id;
                $('#' + abraTypeElId).typed({
                    strings: ["", ABRA_abraTypeStrings[abraTypeElId]],
                    typeSpeed: ABRA_abraTypeSpeed,
                    startDelay: (ABRA_abraTypeSpeed+ABRA_maxTypedRandSeed)*stringBuffer.length
                });
                stringBuffer += ABRA_abraTypeStrings[abraTypeElId];
            }
        }
    }
}

function isInView(elem) {
    var scrollTop = $(window).scrollTop();
    var scrollBottom = scrollTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemTop > scrollTop && elemBottom < scrollBottom;
    //return (elemBottom > scrollTop && elemBottom < scrollBottom) || (elemTop < scrollBottom && elemTop > scrollTop);
}
