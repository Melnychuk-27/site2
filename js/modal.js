/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */
const thanks = document.querySelector('#thanks');
const overlay = document.querySelector('.overlay');
const modalCloses = document.querySelectorAll('.modal__close');
const detail = document.querySelector('#detail');
const detailbody = document.querySelector('#body__modal');
const moreInfoDetail = document.querySelector('.more-info-detail');

if (modalCloses.length > 0) {
  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
      overlay.style.display = 'none';
      // consultation.style.display = 'none';
      thanks.style.display = 'none';
      detail.style.display = 'none';
      // сalculation.style.display = 'none';
    });
  });
}

// btnPromo.addEventListener('click', () => {
//   thanks.style.display = 'none';
//   detail.style.display = 'none';
//   consultation.style.display = 'none';
//   сalculation.style.display = 'block';
//   overlay.style.display = 'block';
// });

overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('overlay')) {
    thanks.style.display = 'none';
    overlay.style.display = 'none';
  }
});
btnReads = document.querySelectorAll('.btn__services');
if (btnReads.length > 0) {
  btnReads.forEach((btnRead) => {
    btnRead.addEventListener('click', () => {
      function GetClassInParent(parElement, classname) {
        let childElement = null;
        for (let i = 0; i < parElement.parentElement.childNodes.length; i++) {
          if (parElement.parentElement.childNodes[i].className === classname) {
            childElement = parElement.parentElement.childNodes[i];
          }
        }
        return childElement;
      }
      function findChildClass(child, classname, text) {
        let descr = null;
        for (let i = 0; i < child.childNodes.length; i++) {
          if (child.childNodes[i].className === classname) {
            if (text) {
              child.childNodes[i].textContent = text;
              descr = child.childNodes[i].textContent;
              break;
            } else {
              descr = child.childNodes[i].textContent;
              break;
            }
          }
        }
        return descr;
      }

      childElement = GetClassInParent(btnRead, 'services__icon-title');
      findChildClass(detailbody, 'modal__subtitle', childElement.textContent);
      descr = findChildClass(moreInfoDetail, childElement.textContent);
      findChildClass(detailbody, 'modal__descr', descr);
      overlay.style.display = 'block';
      detailbody.style.display = 'block';
      detail.style.display = 'block';
    // });
    });
  });
}
