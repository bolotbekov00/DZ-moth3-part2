const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')
let isModal = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    isModal = true
}

const closeModal = () => {
    document.body.style.overflow = ''
    modal.style.display = 'none'
}

setTimeout(() => {
    openModal()
},10000)
modalTrigger.onclick = () => openModal()
modal.onclick = (event) => {
    if (event.target === modal || event.target === modalCloseBtn) {
        closeModal()
    }

}
const checkScroll = () => {
    window.addEventListener('scroll', () => {
        if (!isModal) {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                openModal()
            } else {
                closeModal()
            }
        }
    })
}
checkScroll()
