let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggle i');
let menu = document.getElementById('menu');
let menuLink1 = document.querySelector('.link1');
let menuLink2 = document.querySelector('.link2');
let menuLink3 = document.querySelector('.link3');
let menuLink4 = document.querySelector('.link4');

menuToggle.addEventListener('click', e=>{
   menu.classList.toggle('show');
   if(menu.classList.contains('show')){
      menuToggleIcon.setAttribute('class', 'fa fa-times');
   }else{
      menuToggleIcon.setAttribute('class', 'fa fa-bars');
   }
})

window.addEventListener('click', e=>{
   if (menu.classList.contains('show') && e.target != menuLink1 && e.target != menuLink2 && e.target != menuLink3 && e.target != menuLink4 && e.target != menuToggle){
      menu.classList.toggle('show');
   }
})