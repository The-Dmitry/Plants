const burgerButtonOpen = document.querySelector('.burger')
const burgerMenu = document.createElement('div')


function getBurger() {
  burgerMenu.className = 'burger-menu'
  burgerMenu.innerHTML = 
    `<button class="burger-button"></button>
    <ul class="burger-list">
      <li class="burger-list__Item">
        <a href="#home" class="burger-list__link">Home</a>
      </li>
      <li class="burger-list__Item">
        <a href="#about-us" class="burger-list__link">About us</a>
      </li>
      <li class="burger-list__Item">
        <a href="#service" class="burger-list__link">Service</a>
      </li>
      <li class="burger-list__Item">
        <a href="#price" class="burger-list__link">Price</a>
      </li>
      <li class="burger-list__Item">
        <a href="#contacts" class="burger-list__link">Contacts</a>
      </li>
    </ul>`

  document.body.append(burgerMenu)
  document.body.classList.add('body_blocked')

  setTimeout(()=> {
    burgerMenu.classList.add('burger-menu_opened')

  }, 100)

  burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.remove('burger-menu_opened')
    document.body.classList.remove('body_blocked')
    setTimeout(()=> {
      burgerMenu.remove()
    }, 500)
  })
    
}

burgerButtonOpen.onclick = getBurger