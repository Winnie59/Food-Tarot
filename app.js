const cards = document.querySelectorAll('.card')
const score = document.querySelector('#score')


function shuffleCards() {
     cards.forEach(card => {
        let cardArray = [...Array(cards.length).keys()]
        let randomCard = Math.floor(Math.random()*cards.length)
        card.style.order = cardArray[randomCard]
    })
}
let myBGSound = new Audio('Komiku_-_04_-_Shopping_List.mp3')
    myBGSound.play()
    
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
                }
            }

            const filpCards = document.querySelectorAll('.hide')
            if(filpCards.length == 2) {
                match(filpCards[0],filpCards[1])
            }
        })
    }
}


shuffleCards()
click()





