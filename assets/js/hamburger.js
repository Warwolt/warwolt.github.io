function toggleDisplay(element) {
  if (element.style.display === 'block') {
    element.style.display = 'none'
  } else {
    element.style.display = 'block'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger')
  const openHamburger = hamburger.querySelector('.hamburger-open')
  const closeHamburger = hamburger.querySelector('.hamburger-close')
  const navLinks = document.querySelector('.site-header-nav')

  openHamburger.style.display = 'block'
  closeHamburger.style.display = 'none'

  hamburger.addEventListener('click', () => {
    toggleDisplay(openHamburger)
    toggleDisplay(closeHamburger)
    navLinks.classList.toggle('active')
  });
});
