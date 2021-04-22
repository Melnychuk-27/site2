/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

/* eslint linebreak-style: ["error", "windows"] */

// filter box

function filterItem(event) {
  const filterClass = event.target.getAttribute('data-type');
  btnWorks = document.querySelectorAll('.btn__works-1');
  for (let i = 0; i < btnWorks.length; i += 1) {
    btnWorks[i].classList.remove('btn-active');
  }
  event.target.classList.add('btn-active');
  filterBoxer(filterClass);
  return filterClass;
}

function filterBoxer(filterClass) {
  filterBox = document.querySelectorAll('.works__card');
  index = 0;
  maxItemCard = 3;
  filterBox.forEach((element) => {
    element.style.display = 'none';
    element.classList.remove('hide');
    if (!element.classList.contains(filterClass) && filterClass !== 'ALL') {
      element.classList.add('hide');
    }
    if (element.classList.contains(filterClass) && (index < maxItemCard)) {
      element.style.display = 'block';
      isOpen = false;
      index++;
    } else if (filterClass === 'ALL' && (index < 6)) {
      element.style.display = 'block';
      index++;
    }
    if (!filterClass && (index < 6)) {
      element.style.display = 'block';
      index++;
    } else if (!filterClass) {
      viewMore(filterClass = 'ALL');
    }
  });
}

function viewMoreCard(filterClass) {
  filterBox = document.querySelectorAll('.works__card');
  filterBox.forEach((element) => {
    if (element.classList.contains(filterClass)) {
      element.style.display = 'block';
    } else if (filterClass === 'ALL') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

function viewMore(filterClass) {
  let isOpen;
  btn = document.querySelector('.btn__works-bottom');
  btn.addEventListener('click', () => {
    if (!isOpen) {
      viewMoreCard(filterClass);
      isOpen = true;
      btn.textContent = 'VIEW LESS';
    } else {
      filterBoxer(filterClass);
      isOpen = false;
      btn.textContent = 'VIEW ALL';
    }
  });
}

// eslint-disable-next-line consistent-return
document.querySelector('.works__buttons').addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return false;
  filterClass = filterItem(event);
  viewMore(filterClass);
});
filterBoxer();

//
btnBlog = document.querySelector('.btn__blog-bottom');
btnBlog.addEventListener('click', viewMoreBlog);
i = 1;
viewMoreBlog();
function viewMoreBlog() {
  blogItems = document.querySelectorAll('.blog__i');
  index = 0;
  maxItemCard = i * 3;
  blogItems.forEach((element) => {
    if (index < maxItemCard) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
    index++;
  });
  i++;
  if (maxItemCard >= blogItems.length) {
    btnBlog.textContent = 'View less';
    i = 1;
    maxItemCard = 0;
  } else {
    btnBlog.textContent = 'More view';
  }
}

btnsPrice = document.querySelectorAll('.btn__price');

if (btnsPrice.length > 0) {
  btnsPrice.forEach((btnPrice) => {
    let isOpen = false;
    btnPrice.addEventListener('click', () => {
      console.log(btnPrice.parentElement.previousElementSibling);
      bb = btnPrice.parentElement.previousElementSibling;
      for (let i = 0; i < bb.childNodes.length; i++) {
        if (bb.childNodes[i].className === 'View-more') {
          childElement = bb.childNodes[i];
          console.log(childElement);
          if (isOpen) {
            childElement.style.display = 'none';
            isOpen = false;
            btnPrice.textContent = 'View all';
          } else {
            childElement.style.display = 'block';
            isOpen = true;
            btnPrice.textContent = 'View less';
          }
          break;
        }
      }
    });
  });
}
