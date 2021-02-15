import {
  BODY,
  SWITCH,
  STATE_CHECKBOX,
  CARDS_TRAIN_CONTENT,
  BUTTON_GAME,
  CARD_CATEGORY_CONTENT,
} from './constants.js';
import { defaultRemove } from './game.js';

export function includesSwitch() {
  return SWITCH.addEventListener('change', () => {
    if (BODY.className === 'on') {
      BODY.classList.remove('on');
      STATE_CHECKBOX.checked = false;
      CARDS_TRAIN_CONTENT.classList.remove('game_state');
      BUTTON_GAME.classList.add('no_active');
      defaultRemove();
    } else {
      BODY.classList.add('on');
      STATE_CHECKBOX.checked = false;
      CARDS_TRAIN_CONTENT.classList.add('game_state');
      if (CARD_CATEGORY_CONTENT.classList.contains('no_active') === true) {
        BUTTON_GAME.classList.remove('no_active');
      }
    }
  });
}
