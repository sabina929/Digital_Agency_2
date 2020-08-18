// NAVIGATION
// Toggle menu
const hamburgerMenuButton = document.querySelector('header.big-screen .menu-btn');
const menuContainer = document.querySelector('header.big-screen nav');
// const menuList = document.querySelector('header.big-screen nav ul.menu-items');
const menuItemLink1 = document.querySelector('header.big-screen nav ul.menu-items li:nth-child(1) a');
const menuItemLink2 = document.querySelector('header.big-screen nav ul.menu-items li:nth-child(2) a');
const menuItemLink3 = document.querySelector('header.big-screen nav ul.menu-items li:nth-child(3) a');
const menuItemLink4 = document.querySelector('header.big-screen nav ul.menu-items li:nth-child(4) a');
const menuItemLinks = document.querySelectorAll('header.big-screen nav ul.menu-items li a');

const menuContactParagraph = document.querySelector('header.big-screen nav ul.contact li p');
const menuContactLink = document.querySelector('header.big-screen nav ul.contact li a');

const menuIcon = document.querySelector('header.big-screen .menu-btn .menu-icon');
const dot1 = document.querySelector('header.big-screen .menu-btn .menu-icon div.one');
const dot2 = document.querySelector('header.big-screen .menu-btn .menu-icon div.two');
const dot3 = document.querySelector('header.big-screen .menu-btn .menu-icon div.three');
const dot4 = document.querySelector('header.big-screen .menu-btn .menu-icon div.four');
const dot5 = document.querySelector('header.big-screen .menu-btn .menu-icon div.five');
const dot6 = document.querySelector('header.big-screen .menu-btn .menu-icon div.six');
const dot7 = document.querySelector('header.big-screen .menu-btn .menu-icon div.seven');
const dot8 = document.querySelector('header.big-screen .menu-btn .menu-icon div.eight');
const dot9 = document.querySelector('header.big-screen .menu-btn .menu-icon div.nine');


let isMenuOpened = false;

hamburgerMenuButton.addEventListener("click", checkMenuIsOpened);
function checkMenuIsOpened(){
    if(isMenuOpened === false){
        openMenu()
    } else if(isMenuOpened === true){
        closeMenu()
        // console.log("clicked")
    }
}
function openMenu(){
    isMenuOpened = true;
    dot1.style.display = "none"
    // menuContainer.style.display = "flex"
    // menuContainer.style.transform = "translate(-50%, 0px)"
    setTimeout(() => {
      dot2.style.display = "none"
      menuContainer.style.clipPath = "circle(200% at 50% 0)"
      
      setTimeout(() => {
        dot3.style.display = "none"
        
        setTimeout(() => {
          dot4.style.display = "none"

          setTimeout(() => {
            dot5.style.display = "none"

            setTimeout(() => {
              dot6.style.display = "none"

       
              setTimeout(() => {
                dot7.style.display = "none"
                menuItemLink1.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                menuItemLink1.style.transform = "translateY(0px)"
          
                setTimeout(() => {
                  dot8.style.display = "none"
               
                  setTimeout(() => {
                    dot9.style.display = "none"
                   
                    menuItemLink2.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                    menuItemLink2.style.transform = "translateY(0px)"
                    setTimeout(() => {
                      menuIcon.classList.toggle('clicked')
                   
                      setTimeout(() => {
                        menuItemLink3.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                        menuItemLink3.style.transform = "translateY(0px)"

                        setTimeout(() => {
                          menuItemLink4.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                          menuItemLink4.style.transform = "translateY(0px)"

                          setTimeout(() => {
                            menuContactParagraph.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                            menuContactParagraph.style.transform = "translateY(0px)"
                            setTimeout(() => {
                              menuContactLink.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                              menuContactLink.style.transform = "translateY(0px)"
                            }, 40)
                          }, 40)
                        }, 40)
                      }, 20)
                    }, 20)

                  }, 20)
                }, 20)
              }, 20)
            }, 20)
          }, 20)
        }, 20)
      }, 20)
    }, 20)



   
}
function closeMenu(){
    isMenuOpened = false;
    // menuList.classList.remove("menu-items-appear");
    menuIcon.classList.remove('clicked')
    
    menuContactParagraph.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    menuContactParagraph.style.transform = "translateY(20px)"
    setTimeout(() => {
      menuContactLink.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
      menuContactLink.style.transform = "translateY(20px)"
      setTimeout(() => {
        menuItemLink1.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
        menuItemLink1.style.transform = "translateY(40px)"
        setTimeout(() => {
          menuItemLink2.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
          menuItemLink2.style.transform = "translateY(40px)"

          setTimeout(() => {
            menuItemLink3.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
            menuItemLink3.style.transform = "translateY(40px)"
            setTimeout(() => {
              menuItemLink4.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
              menuItemLink4.style.transform = "translateY(40px)"
              setTimeout(() => {
              dot9.style.display = "block"
              menuContainer.style.clipPath = "circle(0% at 50% 0)"
            

              setTimeout(() => {
                dot8.style.display = "block"

                setTimeout(() => {
                  dot7.style.display = "block"

                  setTimeout(() => {
                    dot6.style.display = "block"

                    setTimeout(() => {
                      dot5.style.display = "block"

                      setTimeout(() => {
                        dot4.style.display = "block"

                        setTimeout(() => {
                          dot3.style.display = "block"

                          setTimeout(() => {
                            dot2.style.display = "block"

                            setTimeout(() => {
                              dot1.style.display = "block"
                              // setTimeout(() => {
                              //    menuContainer.style.transform = "translate(-50%, -1200px)"
                                //  setTimeout(() => {
                                //   menuContainer.style.display = "none"
                                // }, 20)
                              // },1000)
                            },20)
                          },20)
                        },20)
                      },20)
                    },20)
                  },20)
                },20)
              },20)
              },100)
            },40)
          },40)
        },40)
      },40)
    },40)

  
}


menuItemLinks.forEach(menuItemLink => {
  menuItemLink.addEventListener("click", ()=>{
    setTimeout(()=>{
      closeMenu()
    }, 50)
  });
});