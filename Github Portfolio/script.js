const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeList = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portifolioList = document.querySelectorAll('.portifolio-list');
const portifolioBoxs = document.querySelectorAll('.portifolio-box');

 
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


// navbar actons along with cube rotation when navabar is clicked
navs.forEach((nav,idx) => {
    nav.addEventListener('click',()=>{
        document.querySelector('.nav-list li.active').classList.remove('active') ;
        nav.classList.add('active');


        cube.style.transform =`rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');


        const array = Array.from(sections);
        const arrSecs = array.slice(1,-1);
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')){
                sections[4].classList.add('action-contact');
            }
        } );
    });
}); 



//resume section when clicking tab-list
resumeList.forEach((list,idx) => {
    list.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active') 
        list.classList.add('active');


        document.querySelector('.resume-box.active').classList.remove('active') 
        resumeBoxs[idx].classList.add('active');
    });
}); 

// portifolio to section when clicking tab-list
portifolioList.forEach((list,idx) => {
    list.addEventListener('click',()=>{
        document.querySelector('.portifolio-list.active').classList.remove('active') 
        list.classList.add('active');

        document.querySelector('.portifolio-box.active').classList.remove('active') 
        portifolioBoxs[idx].classList.add('active');

    });
}); 

setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);