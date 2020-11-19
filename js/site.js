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

  initializeCarousel() {

    const secondarySlider = new Splide('#secondary-slider', {
      rewind      : true,
      fixedWidth  : 100,
      fixedHeight : 64,
      isNavigation: true,
      gap         : 10,
      focus       : 'center',
      pagination  : false,
      cover       : true,
      drag        : true,
      arrows      : false,
      breakpoints : {
        '374': {
          fixedWidth  : 25,
          fixedHeight : 25,
          gap: 5,
        },
        '413': {
          fixedWidth  : 30,
          fixedHeight : 30,
          gap: 5,
        },
        '600': {
          fixedWidth  : 35,
          fixedHeight : 35,
          gap: 5,
        },
        '1023': {
          fixedWidth  : 65,
          fixedHeight : 65,
          gap: 5,
        },
        '1199': {
          fixedWidth  : 90,
          fixedHeight : 90,
          gap: 5,
        }
      }
    }).mount();

    const primarySlider = new Splide('#primary-slider', {
      type        : 'fade',
      rewind      : true,
      fixedWidth  : 800,
      heightRatio : 0.6,
      pagination  : false,
      arrows      : true,
      drag        : true,
      cover       : true,
      breakpoints : {
        '374': {
          fixedWidth  : 275,
          heightRatio: 0.8,
        },
        '413': {
          fixedWidth  : 340,
          heightRatio: 0.8,
        },
        '600': {
          fixedWidth  : 380,
          heightRatio: 0.8,
        },
        '1023': {
          fixedWidth  : 650,
          heightRatio: 0.8,
        },
      }
    })

    primarySlider.sync(secondarySlider).mount();
  },

  init() {
    this.initializeCarousel();
    this.displayMobileMenu();
    AOS.init({duration: 1500});
  }
}

site.init();