import {
  NAVIGATION_MENU,
  CARD_CATEGORY,
  CARDS_TRAIN_CONTENT,
  CARD_CATEGORY_CONTENT,
  FRONT_IMG_CARDS_TRAIN,
  BACK_IMG_CARDS_TRAIN,
  FRONT_DESCR_CARDS_TRAIN,
  BACK_DESCR_CARDS_TRAIN,
  COUNT,
  STATE_CHECKBOX,
  BUTTON_GAME,
  BODY,
} from './constants.js';

import { cardsTrain } from './cards.train.js';

export let page;

export const createsCardNav = () => {
  NAVIGATION_MENU.forEach((key) => {
    key.addEventListener('click', (e) => {
      STATE_CHECKBOX.checked = false;
      page = e.currentTarget.innerText;
      let i = 0;
      let j;
      if (page === 'Main') {
        CARDS_TRAIN_CONTENT.classList.add('no_active');
        CARD_CATEGORY_CONTENT.classList.remove('no_active');
      } else {
        if (BODY.classList.contains('on') === true) {
          BUTTON_GAME.classList.remove('no_active');
        }
        CARDS_TRAIN_CONTENT.classList.remove('no_active');
        CARD_CATEGORY_CONTENT.classList.add('no_active');
        FRONT_IMG_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.src = cardsTrain[page][j].image;
          i++;
        });
        i = 0;
        BACK_IMG_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.src = cardsTrain[page][j].image;
          i++;
        });
        i = 0;
        FRONT_DESCR_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.innerHTML = cardsTrain[page][j].word;
          i++;
        });
        i = 0;
        BACK_DESCR_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.innerHTML = cardsTrain[page][j].translation;
          i++;
        });
        i = 0;
      }
      document.querySelector('.active_item').classList.remove('active_item');
      e.currentTarget.classList.add('active_item');
    });
  });
};

export const createsCardMain = () => {
  CARD_CATEGORY.forEach((key) => {
    key.addEventListener('click', (e) => {
      STATE_CHECKBOX.checked = false;
      page = e.currentTarget.innerText;
      let i = 0;
      let j;
      if (page === 'Main') {
        CARDS_TRAIN_CONTENT.classList.add('no_active');
        CARD_CATEGORY_CONTENT.classList.remove('no_active');
      } else {
        if (BODY.classList.contains('on') === true) {
          BUTTON_GAME.classList.remove('no_active');
        }
        CARDS_TRAIN_CONTENT.classList.remove('no_active');
        CARD_CATEGORY_CONTENT.classList.add('no_active');
        FRONT_IMG_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.src = cardsTrain[page][j].image;
          i++;
        });
        i = 0;
        BACK_IMG_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.src = cardsTrain[page][j].image;
          i++;
        });
        i = 0;
        FRONT_DESCR_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.innerHTML = cardsTrain[page][j].word;
          i++;
        });
        i = 0;
        BACK_DESCR_CARDS_TRAIN.forEach((elem) => {
          j = COUNT[i];
          elem.innerHTML = cardsTrain[page][j].translation;
          i++;
        });
        i = 0;
        document.querySelector('.active_item').classList.remove('active_item');
        NAVIGATION_MENU.forEach((key) => {
          if (page === key.innerText) {
            key.classList.toggle('active_item');
          }
        });
      }
    });
  });
};
