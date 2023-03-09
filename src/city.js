
let contacts = document.querySelector('.contacts')
let container = document.querySelector('.container')
let selectBlock = document.querySelector('.contact-select')
let parent = document.querySelector('.contact-select__list')
let city = document.querySelector('.contact-select__city')
let list = document.querySelector('.contact-select__list')

let active = false


const cities = {
  'Yonkers, NY': {
    name: 'Yonkers, NY',
    phone: '+19146780003',
    address: '511 Warburton Ave'
  },
  'Sherrill, NY': {
    name: 'Sherrill, NY',
    phone: '+13159080004',
    address: '14 WEST Noyes BLVD'
  },
  'Canandaigua, NY': {
    name: 'Canandaigua, NY',
    phone: '+15853930001',
    address: '151 Charlotte Street'
  },
  'New York City': {
    name: 'New York City',
    phone: '+12124560002',
    address: '9 East 91st Street'
  },
}

contacts.onclick = contactsToggler

function contactsToggler(e){
  if(e.target === city) {
    city.classList.toggle('contact-select__city_active')
    city.matches('.contact-select__city_active') ? openCityList() : closeCityList()
  }
  if(e.target.className === 'contacts-select__item') {
    city.textContent = e.target.textContent
    city.classList.add('contact-select__city_selected')
    closeCityList()
    createCard(e.target.textContent, cities)
  }
}

function closeCityList() {
  list.classList.remove('contact-select__list_open')
  city.classList.remove('contact-select__city_active')
}
function openCityList() {
  list.classList.add('contact-select__list_open')
}

contacts.onmouseleave = ()=> {
  closeCityList()
}

let card = document.createElement('div')

function createCard(name, obj){
  card.classList = 'contact-card'
  card.innerHTML = `<span class="city">City:</span>
                    <span class="city-name">${obj[name].name}</span>
                    <span class="phone">Phone:</span>
                    <span class="phone-number">${obj[name].phone}</span>
                    <span class="address">Office adress:</span>
                    <span class="address-details">${obj[name].address}</span>`

  let button = document.createElement('a')
  button.className = 'contact-card__button'
  button.textContent = 'Call us'
  button.href=`tel:${obj[name].phone}`
  card.append(button)
  selectBlock.append(card)
  active = true
  if(document.body.offsetWidth < 641) {
    container.style.background = 'none'
  }
}
