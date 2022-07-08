const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navMobiMenu = $('#nav-mobi');
const navIcon = $('.bars');
const navClose = $('.nav-close');

navIcon.onclick = function(){
    navMobiMenu.classList.add('showMenu');
}

navClose.onclick = function() {
    navMobiMenu.classList.remove('showMenu');
}

const navMenuItems = $$('.nav-item');
navMenuItems.forEach((item, index) => {
    item.onclick = function() {
        $('.nav-item.active').classList.remove('active');
        this.classList.add('active');
    }
})