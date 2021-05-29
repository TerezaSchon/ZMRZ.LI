import { zmrzliny } from '../zmrzliny.js';

export const Aktualne = () => {
  const aktualneElm = document.querySelector('#aktualne');
  const dnesZmrzli = zmrzliny.map((item) => {
    return (aktualneElm.innerHTML += `<div class="nabidka"><li class="prichut" style="background-color: ${item.backgroundColor}; color: ${item.color}";>${item.name}</li></div>`);
  });
};

// const gameAnswers = {
//       q1: {
//         a1: [ 13, 4, "" ],
//         a2: [ "", "", "" ],
//         a3: [ "", "", "" ],
//         a4: [ "", "", "" ],
//         a5: [ "", "", "" ],
//       },
//       q2: {
//         a1: [ 13, 4, "" ],
//         a2: [ "", "", "" ],
//         a3: [ "", "", "" ],
//         a4: [ "", "", "" ],
//         a5: [ "", "", "" ],
//       },
//       q3: {
//         a1: [ 13, 4, "" ],
//         a2: [ "", "", "" ],
//         a3: [ "", "", "" ],
//         a4: [ "", "", "" ],
//         a5: [ "", "", "" ],
//     }
//       q4: {
//         a1: [ 13, 4, "" ],
//         a2: [ "", "", "" ],
//         a3: [ "", "", "" ],
//         a4: [ "", "", "" ],
//         a5: [ "", "", "" ],
//     }
//       q5: {
//         a1: [ 13, 4, "" ],
//         a2: [ "", "", "" ],
//         a3: [ "", "", "" ],
//         a4: [ "", "", "" ],
//         a5: [ "", "", "" ],
//       }
//       q5: {
//         a1: [ 13, 4, "" ],
//         a2: [ "", "", "" ],
//         a3: [ "", "", "" ],
//         a4: [ "", "", "" ],
//         a5: [ "", "", "" ],
//       }
//     };
