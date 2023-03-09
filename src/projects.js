const buttons = document.querySelectorAll('.service-navigation__button')
const serviceList = document.querySelectorAll('.projects-item')


let count = 0
let cheker = [false, false, false]




buttons.forEach(el => el.addEventListener('click', (e)=> {
  let arr = buttons
  blur(e.target, [...arr].indexOf(e.target))
}))

const blur = (node, num) => {
  if(node.matches(`.service-navigation__button_active`)){
    cheker[num] = false
    count--
    node.classList.remove('service-navigation__button_active')
  } else {
    if(!node.matches(`.service-navigation__button_active`) && (count < 2)) {
      cheker[num] = node.textContent.toLowerCase()
      count++
      node.classList.add('service-navigation__button_active')
    }
  }
  serviceList.forEach(el => el.classList.add('blured'))
  serviceList.forEach(el => {
    cheker.forEach(item => {
      if(item) {
        if(el.matches(`.${item}`)) {el.classList.remove('blured')}
      }
    })
  })

  if(!count) { serviceList.forEach(el => el.classList.remove('blured')) }
}
