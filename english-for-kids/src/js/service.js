import {
  PANEL_BUTTON_CARD,
  CARD_TRAIN,
  LOGO_LINCK,
  CARDS_TRAIN_CONTENT,
  CARD_CATEGORY_CONTENT,
  STATE_CHECKBOX,
  CONTENT_BLOCK,
} from './constants.js';
import { defaultRemove } from './game.js';

// FLIPS THE CARD BACK

let stateCard = false;
export function flipsCardBack() {
  for (let i = 0; i < PANEL_BUTTON_CARD.length; i++) {
    PANEL_BUTTON_CARD[i].onclick = () => {
      CARD_TRAIN[i].classList.add('is_flipped');
      stateCard = true;
    };
  }
  CARD_TRAIN.forEach((key) => {
    key.addEventListener('mouseleave', () => {
      if (stateCard) {
        key.classList.toggle('is_flipped');
        stateCard = false;
      }
    });
  });
}

// LOGO LINCK

export function goesToCategories() {
  LOGO_LINCK.onclick = () => {
    CARDS_TRAIN_CONTENT.classList.add('no_active');
    CARD_CATEGORY_CONTENT.classList.remove('no_active');
    STATE_CHECKBOX.checked = false;
    defaultRemove();
  };
}

CONTENT_BLOCK.addEventListener('click', () => {
  if (STATE_CHECKBOX.checked === true) {
    STATE_CHECKBOX.checked = false;
  }
});

// shuffle the array

export function shuffle(squareNum) {
  return squareNum.sort(() => Math.round(Math.random() * 100) - 50);
}
