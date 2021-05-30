import { zmrzliny } from '../zmrzliny.js';

const aktualneElm = document.querySelector('#aktualne');

const datum = new Date();
const den = datum.getDate();
const mesic = datum.getMonth() + 1;
const rok = datum.getFullYear();
const denVTydnu = datum.getDay();

const datumElm = document.querySelector('.datum');
datumElm.innerHTML = `${den}. ${mesic}. ${rok} tu máme`;

console.log();
export const Aktualne = () => {
  const dnesZmrzli = zmrzliny.map((item) => {
    if (denVTydnu === 6 || denVTydnu === 0) {
      datumElm.innerHTML = `<h3>O víkendu máme zavřeno, jděte na pivo a vyhlížejte pondělí :)</h3>`;
    } else {
      return (aktualneElm.innerHTML += `<div class="nabidka"><li class="prichut" style="background-color: ${item.backgroundColor}; color: ${item.color}";>${item.name}</li></div>`);
    }
  });
};
