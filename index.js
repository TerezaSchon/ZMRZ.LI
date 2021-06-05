import { gameAnswers, zmrzliny, gameResultText } from './zmrzliny.js';

const btnForwardEl = document.querySelector('.js-btn-forward');
const btnBackEl = document.querySelector('.js-btn-back');
const arrowedEl = document.querySelector('.arrowed');

btnForwardEl.addEventListener('click', () => {
  const currentQ = getCurrentQuestion();
  changeQuestion(currentQ, currentQ + 1);
  showEl(btnBackEl);
  if (getCurrentQuestion() === 6) {
    hideEl(btnBackEl);
    hideEl(btnForwardEl);
    hideEl(arrowedEl);
    const answers = getAllAnswers();
    const values1 = gameAnswers[answers[0][0]][answers[0][1]];
    const values2 = gameAnswers[answers[1][0]][answers[1][1]];
    const values3 = gameAnswers[answers[2][0]][answers[2][1]];
    const values4 = gameAnswers[answers[3][0]][answers[3][1]];
    const values5 = gameAnswers[answers[4][0]][answers[4][1]];

    const allValues = values1.concat(values2, values3, values4, values5);

    const result = results(allValues);
    const icecreamResult = lookUp(result);

    showAnswer(icecreamResult);
    hideEl(document.querySelector('.indicator'));
    hideEl(document.querySelector('.game-p'));
    showEl(document.querySelector('.game-kontakty'));
  }
});

function showAnswer(icecreamResult) {
  const headAnswerElm = document.querySelector('.js-result-head');
  const messqgeAnswerElm = document.querySelector('.js-result-text');
  headAnswerElm.textContent =
    gameResultText.headline[icecreamResult[0].resultText];
  messqgeAnswerElm.textContent =
    gameResultText.message[icecreamResult[0].resultText];

  const gameAnswerElm = document.querySelector('.js-game-answer');
  gameAnswerElm.textContent = icecreamResult[0].name.toUpperCase();
  gameAnswerElm.style.backgroundColor = icecreamResult[0].backgroundColor;
  gameAnswerElm.style.color = icecreamResult[0].color;
}

function lookUp(id) {
  return zmrzliny.filter((item) => {
    if (item.id === id) {
      return item;
    }
  });
}

function results(allValues) {
  const numbersOfAnswers = {};

  allValues.forEach((answer) => {
    if (!numbersOfAnswers[answer]) {
      numbersOfAnswers[answer] = 1;
    } else {
      numbersOfAnswers[answer] += 1;
    }
  });
  /*   console.log(numbersOfAnswers); */
  let maxCount = 0;
  let maxIndex = '';

  for (const index in numbersOfAnswers) {
    if (numbersOfAnswers[index] > maxCount) {
      maxCount = numbersOfAnswers[index];
      maxIndex = index;
    }
  }
  return maxIndex;
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
  indicatorEl.textContent = `${num}`;
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
    const modalEl = document.getElementById('myModal');
    modalEl.style.display = 'block';
  }
}
const modalCloseEl = document.getElementsByClassName('close')[0];
modalCloseEl.addEventListener('click', () => {
  const modalEl = document.getElementById('myModal');
  modalEl.style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modalEl = document.getElementById('myModal');
  if (event.target == modalEl) {
    modalEl.style.display = 'none';
  }
});

function getAllAnswers() {
  const checkedAnsItems = checkedItemsFilter(
    document.querySelectorAll('#cont-game input'),
  );

  const answers = checkedAnsItems.map((item) => {
    return [item.dataset.question, item.dataset.answer];
  });

  return answers;
}

import { Aktualne } from './Zmrzliny/index.js';
Aktualne();
//jeNaCepu();
