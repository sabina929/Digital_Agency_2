// NAVIGATION
// Toggle menu
const hamburgerMenuIcon = document.querySelector('header.big-screen .menu-btn .menu-icon');
const menuContainer = document.querySelector('header.big-screen nav');


// let isMenuOpened = false;

// hamburgerMenuIcon.addEventListener("click", checkMenuIsOpened);
// function checkMenuIsOpened(){
//     if(isMenuOpened === false){
//         openMenu()
//     } else if(isMenuOpened === true){
//         closeMenu()
//         // console.log("clicked")
//     }
// }
// function openMenu(){
//     isMenuOpened = true;
//     // hamburgerMenuIcon.src = '../assets/images/close-icon-blue.svg'
//     hamburgerMenuIcon.alt = 'close icon'
//     menuContainer.style.transform = "translate(-50%, 0px)"
   
// }
// function closeMenu(){
//     isMenuOpened = false;
//     // hamburgerMenuIcon.src = '../assets/images/hamburger-icon.svg'
//     menuContainer.style.transform = "translate(-50%, -100vh)"
//     hamburgerMenuIcon.alt = 'hamburger icon'
  
// }

// // NAVIGATION
// const navButton = document.querySelector("header > div.nav-button");
// const navMenu = document.querySelector("header nav.small-screen");
// const menuItems = document.querySelector("header nav.small-screen ul");
// const menuLinks = document.querySelectorAll("header nav.small-screen ul li > .items a");
// const menuLinkContactUs = document.querySelector("header nav.small-screen ul li.contact-us a");
// const patternSmScreen = document.querySelector(
//   "body > header > img.pattern-sm-screen"
// );
hamburgerMenuIcon.addEventListener("click", openMenu);
// menuLinks.forEach(menuLink => {
//   menuLink.addEventListener("click", closeMenu);
// });
// menuLinkContactUs.addEventListener("click", () => {
//   setTimeout(() => {
//     closeMenu();
//   }, 680)
// });
function openMenu() {
    // navButton.classList.toggle("close");
    menuContainer.classList.toggle("open");
    // menuItems.classList.toggle("menu-items-appear");
    // patternSmScreen.classList.toggle("show-pattern");
  }
//   function closeMenu() {
//     navButton.classList.remove("close");
//     navMenu.classList.remove("open");
//     menuItems.classList.remove("menu-items-appear");
//     patternSmScreen.classList.remove("show-pattern");
//   }