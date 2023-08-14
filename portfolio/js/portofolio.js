let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('lni-close')
    navbar.classList.toggle('active');
}






window.onscroll = () => {
    sections.forEach(sec => {
let top = window.scrollY
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id  = sec.getAttribute('id');


if(top >= offset && top < offset + height){
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
    })
}
    } )

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('lni-close');
  navbar.classList.remove('active');


}






/*scroll reveal*/
ScrollReveal({
  
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});



/*typed js */
const typed = new Typed('.multiple-text',{
    strings:['Front-End Developer'],
    typeSpeed:150,
    backSpeed:100,
    backDealy:1000,
    
})