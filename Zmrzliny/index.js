import { zmrzliny } from '../zmrzliny.js';

export const Aktualne = () => {
  const aktualneElm = document.querySelector('#aktualne');
  const dnesZmrzli = zmrzliny.map((item) => {
    return (aktualneElm.innerHTML += `<div class="nabidka"><li class="prichut" style="background-color: ${item.backgroundColor}; color: ${item.color}";>${item.name}</li></div>`);
  });
};
