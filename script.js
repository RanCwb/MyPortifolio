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

 let  github =  document.getElementById('github')
  
    github.onclick = function () {  
        
    window.open('https://github.com/RanCwb')
}


let  cash = document.getElementById('cash')

    cash.onclick = function () {
        
        window.open('https://github.com/RanCwb/AppFinance')
    }


let  insta = document.getElementById('insta')

    insta.onclick = function () {
        
        window.open('https://github.com/RanCwb/appInsta')
    }




