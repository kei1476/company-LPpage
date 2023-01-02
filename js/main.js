'use strict';

// トップに戻るボタン
    function scrollFirstview() {
        const target = document.getElementById('button');
        target.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    scrollFirstview();

    function Animation() {
        let pageTop = document.getElementById('button');
        let dest = window.pageYOffset;
        if (dest > 400) {
            pageTop.classList.add('show');
        } else {
            pageTop.classList.remove('show');
        }
    }
window.addEventListener('scroll', Animation);
    
    
// header固定
    $(function () {
        var navPos = $(".nav-area").offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > navPos) {
                $(".nav-area").css("position", "fixed");
                $(".nav-area").css("background-color", "#21054D");
            } else {
                $(".nav-area").css("position", "static");
                $(".nav-area").css("background-color", "transparent");
            }
        });
    });
    
    
// ハンバーガーメニュー レスポンシブメニュー
    const hambtn = document.getElementById("menu");
    const responsiveMenu = document.getElementById("responsive-menu");
    hambtn.addEventListener('click', () => {
        hambtn.classList.toggle('open');
        responsiveMenu.classList.toggle('appear')
    });


// ボタン矢印

function moveCaret (commonButton) {
    $(commonButton).hover(function () {
        $(".fa-caret-right").css("transform", "translateX(50%)");
        }, function () {
        $(".fa-caret-right").css("transform", "translateX(-50%)");    
    });   
}

moveCaret(".common-button");
moveCaret(".firstview-button");


