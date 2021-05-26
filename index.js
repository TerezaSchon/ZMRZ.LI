const btnEl = document.querySelector('.js-btn-forward');

btnEl.addEventListener('click', () => {
  const currentQ =  zde zavolas getCurrentQuestion
  changeQuestion(currentQ);
});

function getCurrentQuestion() {
  vrat ( zjisti _element_.dataset.currentQ )  
}

function setCurrentQuestion(___) {
   zjisti _element_ a do jeho vlastnosti dataset.currentQ  nastav ___
}


function changeQuestion(num) {
  const inputEls = Array.from(
    document.querySelectorAll(`.js-game-q${num} input`),
  );
  const chekedItems = inputEls.filter((item) => {
    if (item.checked === true) {
      return item;
    }
  });

  if (chekedItems.length > 0) {
    document.querySelector(`.js-game-q${num}`).classList.add('hide');
    document.querySelector(`.js-game-q${num + 1}`).classList.remove('hide');
  } else {
    alert('zaškrtni položku');
  }

  nastavis setCurrentQuestion na num + 1
}
