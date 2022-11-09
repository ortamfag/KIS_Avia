let cookieParse = document.cookie.split(';')

let positionOfLogOff
for (let i = 0; i <= cookieParse.length - 1; i++) {
    if (cookieParse[i].includes('isLogOff')) {
        positionOfLogOff = i //определение куки, хранящей информацию о краше
    }
}

if (cookieParse[positionOfLogOff].split('=')[1] === 'no') {
    //попап
    const makeModal = modalSel => {
        const modalEl = document.querySelector(modalSel + 'Popup');
            closeEl = document.querySelector(modalSel + 'Cross')
            closeBody = document.querySelector('.popup')
            bg = document.querySelector(modalSel + 'Bg')

        modalEl.classList.add('open');
        closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
        bg.addEventListener('click', () => modalEl.classList.remove('open'));
    }

    makeModal('#log')
}


let positionOfBadLogin
for (let i = 0; i <= cookieParse.length - 1; i++) {
    if (cookieParse[i].includes('badLogin')) {
        positionOfBadLogin = i //определение куки, хранящей количество неправильных входов
    }
}

let countOfBadLogin
if (positionOfBadLogin != 'undefined') {
    countOfBadLogin = cookieParse[positionOfBadLogin].split('=') //количество неправильных вводов пароля
}

const blockedError = document.getElementById('blockedError')
const counterOfBlockedSec = document.getElementById('counterOfBlockedSec')
const buttonBlock = document.getElementById('loginSubmit')

let counterOfSec
let positionOfBlockTime

if (countOfBadLogin[1] >= 3) {
    buttonBlock.classList.add('loginExitBlock')
    for (let i = 0; i <= cookieParse.length - 1; i++) {
        if (cookieParse[i].includes('time')) {
            positionOfBlockTime = i
        }
    }

    if (document.cookie.includes('time')) {
        counterOfSec = cookieParse[positionOfBlockTime].split('=')[1]
    } else {
        counterOfSec = 10
        document.cookie = `time=${counterOfSec}`
    }

    blockedError.classList.add('blockedActive')

    const countDown = setInterval(() => {
        document.cookie = `time=${counterOfSec}`

        if (counterOfSec >= 10) {
            counterOfBlockedSec.innerHTML = `0:${counterOfSec}`
        } else {
            counterOfBlockedSec.innerHTML = `0:0${counterOfSec}`
        }

        if (counterOfSec > 0) {
            counterOfSec--
        } else if (counterOfSec === 0) {
            clearInterval(countDown)
            buttonBlock.classList.remove('loginExitBlock')
            blockedError.classList.remove('blockedActive')
            document.cookie = 'badLogin=0'
            document.cookie = 'time=10'
            counterOfSec = 10
        }

    }, 1000)
}