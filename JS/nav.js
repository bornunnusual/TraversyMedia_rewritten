const navSlide = () => {
    const tabmenuToggle = document.querySelector(".menu_btn");
    const nav = document.querySelector(".tabmenu-page");
    //Links
    const home = document.querySelector(".home-l");
    const courses = document.querySelector(".courses-l");
    const youtube = document.querySelector(".youtube-l");
    const about = document.querySelector(".about-l");
    const pgs = document.querySelector(".pgs-l");
    const contact = document.querySelector(".contact-l");
    //Toggle TabMenu
    tabmenuToggle.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
    //Close when link CLicked
    home.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
    courses.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
    youtube.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
    about.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
    pgs.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
    contact.addEventListener('click', ()=>{
        nav.classList.toggle("active");
    });
}

navSlide();