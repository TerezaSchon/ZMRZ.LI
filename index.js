const btnForwardEl = document.querySelector('.js-btn-forward');
const btnBackEl = document.querySelector('.js-btn-back');

btnForwardEl.addEventListener('click', () => {
  const currentQ = getCurrentQuestion();
  changeQuestion(currentQ, currentQ + 1);
});

btnBackEl.addEventListener('click', () => {
  const currentQ = getCurrentQuestion();
  changeQuestion(currentQ, currentQ - 1);
});

function getCurrentQuestion() {
  const gameEl = document.getElementById('game');
  return Number(gameEl.dataset.currentQ);
}

function setCurrentQuestion(question) {
  const gameEl = document.getElementById('game');
  gameEl.dataset.currentQ = question;
}

function setQestionIndicator(num) {
  const indicatorEl = document.querySelector('.js-q-indicator');
  indicatorEl.textContent = `${num}/6`;
}

function changeQuestion(from, to) {
  const inputEls = Array.from(
    document.querySelectorAll(`.js-game-q${from} input`),
  );
  const chekedItems = inputEls.filter((item) => {
    if (item.checked === true) {
      return item;
    }
  });

  if (chekedItems.length > 0) {
    document.querySelector(`.js-game-q${from}`).classList.add('hide');
    document.querySelector(`.js-game-q${to}`).classList.remove('hide');
    setCurrentQuestion(to);
    setQestionIndicator(to);
  } else {
    alert('zaškrtni položku');
  }
}
