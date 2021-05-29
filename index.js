import { gameAnswers } from './zmrzliny.js';

const btnForwardEl = document.querySelector('.js-btn-forward');
const btnBackEl = document.querySelector('.js-btn-back');

btnForwardEl.addEventListener('click', () => {
  const currentQ = getCurrentQuestion();
  changeQuestion(currentQ, currentQ + 1);
  showEl(btnBackEl);
  if (getCurrentQuestion() === 6) {
    hideEl(btnBackEl);
    hideEl(btnForwardEl);
    const answers = getAllAnswers();
    const values1 = gameAnswers[answers[0][0]][answers[0][1]];
    const values2 = gameAnswers[answers[1][0]][answers[1][1]];
    const values3 = gameAnswers[answers[2][0]][answers[2][1]];
    const values4 = gameAnswers[answers[3][0]][answers[3][1]];
    const values5 = gameAnswers[answers[4][0]][answers[4][1]];

    const allValues = values1.concat(values2, values3, values4, values5);
    /*  console.log(allValues); */

    results(allValues);
  }
});
function results(allValues) {
  console.log(allValues);
}

btnBackEl.addEventListener('click', () => {
  const currentQ = getCurrentQuestion();
  changeQuestion(currentQ, currentQ - 1);
  if (getCurrentQuestion() === 1) {
    hideEl(btnBackEl);
  }
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

function checkedItemsFilter(inputEls) {
  const elements = Array.from(inputEls);

  const checkedItems = elements.filter((item) => {
    if (item.checked === true) {
      return item;
    }
  });

  return checkedItems;
}

function changeQuestion(from, to) {
  const checkedItems = checkedItemsFilter(
    document.querySelectorAll(`.js-game-q${from} input`),
  );

  if (checkedItems.length > 0) {
    hideEl(document.querySelector(`.js-game-q${from}`));
    showEl(document.querySelector(`.js-game-q${to}`));
    setCurrentQuestion(to);
    setQestionIndicator(to);
  } else {
    alert('zaškrtni položku');
  }
}

function getAllAnswers() {
  const checkedAnsItems = checkedItemsFilter(
    document.querySelectorAll('#cont-game input'),
  );

  const answers = checkedAnsItems.map((item) => {
    return [item.dataset.question, item.dataset.answer];
  });

  return answers;
}

/* function checkedAllAnswers() {
  const elements = Array.from(getAllAnswers());
  return elements;
} */

import { Aktualne } from './Zmrzliny/index.js';
Aktualne();

const datum = new Date();
const den = datum.getDate();
const mesic = datum.getMonth() + 1;
const rok = datum.getFullYear();

const datumElm = document.querySelector('.aktu-na-cepu');
datumElm.innerHTML = `${den}. ${mesic}. ${rok} pro vás máme`;
