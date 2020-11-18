const site = {
  displayMobileMenu() {
    if (window.screen.width < 1024) {
      const button = document.querySelector('.mobileBtn');
      const icon = document.querySelector('.mobileBtn_icon');
      const navbar = document.querySelector('.header_nav');
      const navbarItems = document.querySelectorAll('.header_nav--item');
  
      button.addEventListener('click', () => {

        if (navbar.classList.contains('menuOn')) {
          navbarItems.forEach(item => item.classList.remove('displayItem')); 
          setTimeout(() => {
            navbar.classList.remove('menuOn');
            icon.classList.remove('rotateIcon');
          }, 100);
        }

        navbar.classList.add('menuOn');
        icon.classList.add('rotateIcon');
        setTimeout(() => {
          navbarItems.forEach(item => item.classList.add('displayItem'));          
        }, 700);

      })
  
      navbarItems.forEach(item => item.addEventListener('click', () => {
        navbarItems.forEach(item => {
          item.classList.remove('displayItem');
        })
        setTimeout(() => {
          navbar.classList.remove('menuOn');
          icon.classList.remove('rotateIcon');          
        }, 100);
      }))
    }

    return null;
  },

  init() {
    this.displayMobileMenu();
    AOS.init({duration: 1500});
  }
}

site.init();