//Hw1-p1♠
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[/^[a-zA-Z0-9._%+-]+@gmail\.com|@yandex.ru|info.cern.ch|mailfence.com$/

gmailButton.addEventListener('click', () =>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'Проверка прошла успешна'
        gmailResult.style.color = "green"
    }
    else {
        gmailResult.innerHTML = 'Введите нормально, пожалуйста'
        gmailResult.style.color = "red"
    }
})
// Hw1-p2

let block = 0
function recAni() {
    block = block + 5;
    if (block > 450) return;
    document.querySelector('.child_block').style.left = block +'px';
    time()
}

function time(){
    setTimeout(recAni, 100)
}
time()