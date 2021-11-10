const cards = document.querySelectorAll('.card')
const score = document.querySelector('#score')


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

            function match(cardOne, cardTwo) {
                if(cardOne.dataset.pair === cardTwo.dataset.pair) {
                    score.innerHTML = parseInt(score.innerHTML) +1
            console.dir(cardOne)
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


