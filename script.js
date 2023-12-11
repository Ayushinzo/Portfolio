let cancle = document.querySelector('.deco')
let menu = document.querySelector('.menu')
let navBar = document.querySelector('.header')

menu.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
    setTimeout(()=>{
        cancle.classList.toggle('active')
    }, 200)
})

cancle.addEventListener('click', ()=>{
    navBar.classList.remove('active')
    cancle.classList.remove('active')
})

window.onscroll = () =>{
    navBar.classList.remove('active')
    cancle.classList.remove('active')
}

var typed = new Typed('#element', {
    strings: ['C','C++','HTML', 'CSS', 'Javascript', 'Python', 'mongodb', 'SQL', 'GSAP', 'Bootstrap', 'Batch Scripting', 'git and github'],
    typeSpeed: 70,
    loop: true,
    backSpeed: 30,
  });