import { zmrzliny } from '../zmrzliny.js';

const aktualneElm = document.querySelector('#aktualne');
const datum = new Date();
const den = datum.getDate();
const mesic = datum.getMonth() + 1;
const rok = datum.getFullYear();
const denVTydnu = datum.getDay();

const datumElm = document.querySelector('.datum');
datumElm.innerHTML = `${den}. ${mesic}. ${rok} tu máme`;

export const Aktualne = () => {
  const dnesZmrzli = zmrzliny.map((item) => {
    if (denVTydnu === 6 || denVTydnu === 0) {
      datumElm.innerHTML = `<h3>O víkendu máme zavřeno, jdi na pivo a vyhlížej pondělí :)</h3>`;
    } else {
      return (aktualneElm.innerHTML += `<div class="dnesniZmrzli"><li class="dostupne_${item.naCepu}" style="background-color: ${item.backgroundColor}; color: ${item.color}";>${item.name}</li></div>`);
    }
  });
};

// export const jeNaCepu = () => {
//   const dnesZmrzli = zmrzliny.map((item) => {
//     if (denVTydnu !== 6 && item.naCepu === true) {
//       return (aktualneElm.innerHTML += `<div class="dnesniZmrzli"><li class="prichut" style="background-color: ${item.backgroundColor}; color: ${item.color}";>${item.name}</li></div>`);
//     } else {
//       aktualneElm.innerHTML = `<h3>O víkendu máme zavřeno, jdi na pivo a vyhlížej pondělí :)</h3>`;
//     }
//   });
// };
