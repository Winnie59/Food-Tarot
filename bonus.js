const cards = document.querySelectorAll(".card1");

function shuffleCards() {
  cards.forEach((card) => {
    let cardArray = [...Array(cards.length).keys()];
    let randomCard = Math.floor(Math.random() * cards.length);
    card.style.order = cardArray[randomCard];
    let myBonusSound = new Audio("sound/cheer.mp3");
    myBonusSound.play();
    myBonusSound.volume = 0.1;
  });
}

function click() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      setTimeout(() => {
        cards[i].classList.add("hide");
      }, 5000);

      let myDrumSound = new Audio("sound/drum.mp3");
      myDrumSound.play();
      myDrumSound.volume = 1.2;
      
    });
  }
}

shuffleCards();
click();
