/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;

        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' +id +']').classList.add('active');
            })
        }
     })

    /*==================== sticky navbar ====================*/
let header=document.querySelectorAll('header');
header.classList.toggle('sticky',window.scrollY>100)
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    

};


/*==================== scroll reveal ====================*/
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    console.log('ScrollReveal initialized');

    ScrollReveal().reveal('.home-context,.header,.heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom'});
    ScrollReveal().reveal('.home-context h1,.about-img', { origin: 'left'});
    ScrollReveal().reveal('.home-context p,.about-content', { origin: 'right'});
    


    console.log('Elements revealed');
});



/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
