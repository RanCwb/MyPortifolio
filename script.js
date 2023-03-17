let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menu.onclick = () =>{

    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}

window.onscroll = () =>{

    menu.classList.remove('bx-x')
    navbar.classList.remove('active')

}

const open = ScrollReveal ({


    distance:'60px',
    duration:2500,
    reset: true
})

open.reveal('.home-text',{delay:200, origin:'top'})
open.reveal('.home-img',{delay:400, origin:'top'})
open.reveal('.about, .services, .resume, ',{delay:200, origin:'top'})
