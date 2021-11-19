const cards = document.querySelectorAll(".card");
const score = document.querySelector("#score");
const overlay = document.querySelector(".overlay");
const time = document.querySelector("#time");

function shuffleCards() {
  cards.forEach((card) => {
    let cardArray = [...Array(cards.length).keys()];
    let randomCard = Math.floor(Math.random() * cards.length);
    card.style.order = cardArray[randomCard];
  });
}

function start() {
  document.querySelector("#startpage").addEventListener("click", () => {
    overlay.classList.remove("visible");
    let myBGSound = new Audio("sound/bg1.mp3");
    myBGSound.play();
    myBGSound.volume = 0.4;
    shuffleCards();
    click();
    let timecountDown = setInterval(countDown, 1000);
    function countDown() {
      let timeCounting = time.innerText;
      timeCounting--;
      time.innerText = timeCounting;
      if (timeCounting === 0) gameOver();
      restart();
    }

    function click() {
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          cards[i].classList.add("hide");
          let myFlipSound = new Audio("sound/flip.mp3");
          myFlipSound.play();
          myFlipSound.volume = 0.5;

          function match(cardOne, cardTwo) {
            if (cardOne.dataset.pair === cardTwo.dataset.pair) {
              let myBlingSound = new Audio("sound/blink.mp3");
              myBlingSound.play();
              myBlingSound.volume = 0.5;
              score.innerHTML = parseInt(score.innerHTML) + 1;
              cardOne.classList.remove("hide");
              cardOne.classList.add("match");
              cardTwo.classList.remove("hide");
              cardTwo.classList.add("match");
            } else {
              setTimeout(() => {
                cardOne.classList.remove("hide");
                cardTwo.classList.remove("hide");
              }, 800);
            }
            if (score.innerHTML == 10) {
              winning();
            }
          }

          let filpCards = document.querySelectorAll(".hide");
          if (filpCards.length == 2) {
            match(filpCards[0], filpCards[1]);
          }
        });
      }
    }

    function gameOver() {
      clearInterval(timecountDown);
      let myFailSound = new Audio("sound/fail.mp3");
      myFailSound.play();
      myFailSound.volume = 0.6;
      document.querySelector("#gameover").classList.add("visible");
    }

    function winning() {
      clearInterval(timecountDown);
      let myWinSound = new Audio("sound/win.mp3");
      myWinSound.play();
      myWinSound.volume = 0.6;
      document.querySelector("#win").classList.add("visible");
    }

    function mute() {
      myBGSound.pause();
    }

    function unMute() {
      myBGSound.play();
    }

    document.querySelector("#mute").addEventListener("click", mute);
    document.querySelector("#unmute").addEventListener("click", unMute);
  });
}

function restart() {
  document.querySelector("#over").addEventListener("click", () => {
    document.querySelector("#gameover").classList.remove("visible");
  });
}

start();
