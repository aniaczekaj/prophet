function initUpdateNavbarOnScroll() {
  console.log("Hello from app/javascript/packs/application.js!");
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= $(window).height()) {
        navbar.classList.add('navbar-wagon-white');
      } else {
        navbar.classList.remove('navbar-wagon-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
