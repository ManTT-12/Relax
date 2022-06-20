function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('#sidebar');
    let main = document.querySelector('.main-content');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}