const site = {

  displayMobileMenu() {
    const button = document.querySelector('#button');
    const icon = document.querySelector('#icon');
    const navbar = document.querySelector('#navbar');
    const ul = document.querySelector('#ul');
    const li = document.querySelectorAll('#li');

    button.addEventListener('click', () => {
      if (navbar.classList.contains('menuOn')) {
        ul.classList.toggle('displayItem');
        setTimeout(() => {
          navbar.classList.toggle('menuOn');
          icon.classList.toggle('rotateIcon');
        }, 200);
      }
      if (!navbar.classList.contains('menuOn')) {
        navbar.classList.toggle('menuOn');
        icon.classList.toggle('rotateIcon');
        setTimeout(() => {
          ul.classList.toggle('displayItem');        
        }, 500);
      }
    })

    li.forEach(item => item.addEventListener('click', () => {
      ul.classList.toggle('displayItem');
      setTimeout(() => {
        navbar.classList.toggle('menuOn');
        icon.classList.toggle('rotateIcon');
      }, 200);
    }))
  },

  init() {
    this.displayMobileMenu();
    AOS.init({duration: 1500});
  }
}

site.init();