//select DOM (Document object model) Items
/*main.js is linked to index.html via the <script> tag in the body of index.html */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
/*use querySelectorAll for nav-items since there's more than one nav-time list element*/
const navItems = document.querySelectorAll('.nav-item'); //navItems is a node list containing nav-items

// Set Initial state of Menu
let showMenu =  false;

// Add event listener to menu button that invokes toggleMenu function
menuBtn.addEventListener('click', toggleMenu);

/*
The add functions used here actually change the class used by the html elements:
menuBtn, menu, menuBranding, menuNav, navItems
(can see this in firefox in real-time using F12)
*/
function toggleMenu() {
    if (!showMenu) {
        //append animation classes to menu DOM items, trigger CSS transitions to perfrom animations
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(
            navItem => navItem.classList.add('show')
        );
        //Set Menu state to show
        showMenu = true; 
    } else {
        //remove animation classes to menu DOM items, trigger CSS transitions to perfrom animations
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(
            navItem => navItem.classList.remove('show')
        );
        //Set Menu state to no-show
        showMenu = false;
    }
}