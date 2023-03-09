let buttons = document.querySelectorAll('.prices__button')



buttons.forEach(el => el.onclick = toggler)


function toggler(e) {
  let temp = e.target.matches('.expanded')
  buttons.forEach(el => {
    el.classList.remove('expanded')
    el.parentNode.classList.remove('prices-list__item_colored')
  })
  if(!temp) {
    e.target.classList.add('expanded')
    e.target.parentNode.classList.add('prices-list__item_colored')
  }
}

