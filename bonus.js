const cards = document.querySelectorAll('.card1')


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
            setTimeout(() => {
             cards[i].classList.add('hide')   
            }, 4500)
           
              let myDrumSound = new Audio('drum-roll-sound-effect.mp3')
    myDrumSound.play()
            
        })
    }
}

shuffleCards()
click()





