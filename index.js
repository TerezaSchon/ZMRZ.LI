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

function hideEl(element) {
  element.classList.add('hide');
}

function showEl(element) {
  element.classList.remove('hide');
}

function getCurrentQuestion() {
  const gameEl = document.getElementById('cont-game');
  return Number(gameEl.dataset.currentQ);
}

function setCurrentQuestion(question) {
  const gameEl = document.getElementById('cont-game');
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
    hideEl(document.querySelector(`.js-game-q${from}`));
    showEl(document.querySelector(`.js-game-q${to}`));
    setCurrentQuestion(to);
    setQestionIndicator(to);
  } else {
    alert('zaškrtni položku');
  }
}

/* function setCurrentAnswers() {
  const inputEls = Array.from(
    document.querySelectorAll('#cont-game');
  );
  const chekedItems = inputEls.filter((item) => {
    if (item.checked === true) {
      return item;
    }
  });  */

import { Aktualne } from './Zmrzliny/index.js';
Aktualne();

const datum = new Date();
const den = datum.getDate();
const mesic = datum.getMonth() + 1;
const rok = datum.getFullYear();

const datumElm = document.querySelector('.aktu-na-cepu');
datumElm.innerHTML = `Dneska ${den}. ${mesic}. ${rok} zmrz.li`;
