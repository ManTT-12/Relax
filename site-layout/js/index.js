const navIcon = document.getElementsByClassName("bars");
const navMenu = document.getElementById("navbar");
const navClose = document.getElementsByClassName("close");

navIcon.addEventListener('click', function()){
    if(navMenu.style.opacity == "1"){
        navMenu.style.opacity = '0';
    }else{
        navMenu.style.opacity = '1';
        navMenu.pointerEvents = 'auto'
    }
}