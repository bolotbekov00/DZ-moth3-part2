// phone

const phoneInput = document.querySelector('#phone_input')
const phoneResult = document.querySelector('#phone_result')
const phoneButton = document.querySelector('#phone_button')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = "green"
    }
    else {
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = "red"
    }
})


// Tab slider
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabSParent = document.querySelector('.tab_content_items')

let currentTabIndex = 0
let intervalId

const hideTabContent = () => {
    tabContent.forEach(tabBlock => {
        tabBlock.style.display = 'none'
    })

    tabs.forEach(tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {
    tabContent[indexElement].style.display = 'block'
    tabs[indexElement].classList.add('tab_content_item_active')
}

const autoSlide = () => {
    hideTabContent()
    currentTabIndex = (currentTabIndex + 1) % tabs.length
    showTabContent(currentTabIndex)
}

hideTabContent()
showTabContent(0)

tabSParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabItems, tabIndex) => {
            if (event.target === tabItems) {
                hideTabContent()
                currentTabIndex = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}
const intervalDuration = 3000
intervalId = setInterval(autoSlide, intervalDuration)



