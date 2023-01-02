'use strict';
// トップに戻るボタン

    function scrollTop() {
        const target = document.getElementById('button');
        target.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    scrollTop();

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

    const menu = document.getElementById("menu");
    menu.addEventListener('click', () => {
        menu.classList.toggle('open');
    });


const target = document.getElementById("menu");
target.addEventListener('click', () => {
    target.classList.toggle('open');
});


