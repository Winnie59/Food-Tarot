const cards = document.querySelectorAll('.card')
const score = document.querySelector('#score')
const overlay = document.querySelector('.overlay')
const time = document.querySelector('#time')



let timeCounting = 90
let scoreCount = 0

function start() {
    document.querySelector('#startpage').addEventListener('click', () => {
        overlay.classList.remove('visible')
        let myBGSound = new Audio('Komiku_-_04_-_Shopping_List.mp3')
        myBGSound.play()
        shuffleCards()
        click()
        countDown()
    })
}

let timecountDown = setInterval(countDown,1000)
function countDown() {
        let timeCounting = time.innerText
        timeCounting--
        time.innerText = timeCounting
        if(timeCounting === 0)
        gameOver()
    }


function shuffleCards() {
     cards.forEach(card => {
        let cardArray = [...Array(cards.length).keys()]
        let randomCard = Math.floor(Math.random()*cards.length)
        card.style.order = cardArray[randomCard]
    })
}

function click() { 
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            cards[i].classList.add('hide')
            let myFlipSound = new Audio('Card-flip-sound-effect.mp3')
            myFlipSound.play()
            function match(cardOne, cardTwo) {
                if(cardOne.dataset.pair === cardTwo.dataset.pair) {
                    let myBlingSound = new Audio('Diamond-bling-sound-effect.mp3')
            myBlingSound.play()
            let scoreCount = score.innerHTML
                    score.innerHTML = parseInt(score.innerHTML) +1
                    cardOne.classList.remove('hide')
                    cardOne.classList.add('match')
                    cardTwo.classList.remove('hide') 
                    cardTwo.classList.add('match')
                } else {
                    setTimeout(() => {
                        cardOne.classList.remove('hide')
                        cardTwo.classList.remove('hide')
                    }, 1000)
                } if (score.innerHTML == 10) {
                    winning()
                }
            }

            const filpCards = document.querySelectorAll('.hide')
            if(filpCards.length == 2) {
                match(filpCards[0],filpCards[1])
            } 
        })
    }
}


function gameOver() {
    clearInterval(timecountDown)
    let myFailSound = new Audio('fail-trombone-01.mp3')
            myFailSound.play()
    document.querySelector('#gameover').classList.add('visible')
}

function winning() {
    clearInterval(timecountDown)
    let myWinSound = new Audio('Game-show-winner-sound-effect.mp3')
            myWinSound.play()
    document.querySelector('#win').classList.add('visible')
}

start()




