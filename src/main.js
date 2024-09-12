const open =
    document.querySelector('.burger-btn');

    const close =
    document.querySelector('.mobile-btn');


const menu =
    document.querySelector('.mobile-menu');

open.addEventListener('click',
    function () {
        menu.classList.add('is-open');
    });

    close.addEventListener('click',
    function () {
        menu.classList.remove('is-open');
        });
    
                const links =
    document.querySelectorAll('.nav-link-header');

links.forEach(function (link) {
    link.addEventListener('click',
        function (event) {
            links.forEach(function (link) {
                link.classList.remove('current');
            });
            this.classList.add('current');
        });
});
    
const drops =
    document.querySelectorAll('.nav-link-mobile');

drops.forEach(function (drop) {
    drop.addEventListener('click',
        function (event) {
           drops.forEach(function (drop) {
                drop.classList.remove('current');
            });
            this.classList.add('current');
            // menu.classList.remove('is-open');
        });
    });
