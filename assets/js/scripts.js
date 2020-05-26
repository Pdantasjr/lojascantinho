const slider = tns({
    container: '.my-slider',
    items: 4,
    speed: 300,
    autoplayHoverPause: true,
    autoWidth: true,
    mouseDrag: true,
    autoplay: false,
    gutter: 20,
    controls: true,
    arrowKeys: false,
    nav: false,
    controlsText: ["<i class=\"fas fa-chevron-left\"></i>", "<i class=\"fas fa-chevron-right\"></i>"]
});

const animeMenu = () => {
    const windowTop = window.pageYOffset;
    const menuTop = document.getElementById('nav');
    const menuSide = document.getElementById('nav-links');
    if(windowTop >= 300) {
        menuTop.classList.add('scrollMenu');
        menuSide.classList.replace('nav-links','scrollSidebar');
    } else {
        menuTop.classList.remove('scrollMenu');
        menuSide.classList.replace('scrollSidebar','nav-links');
    }
}

window.addEventListener('scroll', () => {
    animeMenu();
});

const navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    let btnSearch = document.querySelector('.btnSearch');
    let inputText = document.querySelector('.input-search');

    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

        //Search form
        btnSearch.addEventListener('click', ()=>{
            let width = window.screen.width;
            if (width <= 400) {
                inputText.classList.toggle('btnSearchActive400');
            } else {
                inputText.classList.toggle('btnSearchActive');
            }
            let media = window.screen.width;
            console.log(media);
        });
    });
}

navSlide();