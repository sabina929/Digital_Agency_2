// NAVIGATION
// Toggle menu
const hamburgerMenuButton = document.querySelector('header.big-screen .menu-btn');
const menuContainer = document.querySelector('header.big-screen nav');
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
      menuContainer.style.clipPath = "circle(100% at 50% 0)"
      
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

                setTimeout(() => {
                  dot8.style.display = "none"

                  
                  setTimeout(() => {
                    dot9.style.display = "none"
                    
                    setTimeout(() => {
                      menuIcon.classList.add('clicked')
                      // setTimeout(() => {
                      // }, 20)
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
    menuContainer.style.clipPath = "circle(00% at 50% 0)"
    menuIcon.classList.remove('clicked')
    setTimeout(() => {
      dot9.style.display = "block"
     

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
    

  
}
