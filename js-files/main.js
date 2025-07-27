const menuIcon = document.getElementById('menu-icon');
const sideBar = document.getElementById('side-bar');
const closeIcon = document.getElementById('close-icon');
const header = document.getElementById('nav-bar');
const green ='#115241';

if (sideBar) {
    sideBar.classList.add('hidden');
}

menuIcon.addEventListener('click', () => {
    if (sideBar.classList.contains('hidden')) {
    header.style.backgroundColor = green;

        sideBar.classList.remove('hidden');
    } 
});
closeIcon.addEventListener('click',()=>{
    sideBar.classList.add('hidden') 
    header.style.backgroundColor = 'transparent';
        
    
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value as needed
        header.style.backgroundColor = green;
    } else {
    header.style.backgroundColor = 'transparent';

    }
});

