import {
  FRONT_CARD_TRAIN,
  AUDIO_WORD,
  BODY,
} from './constants.js';
import { cardsTrain } from './cards.train.js';
import { page } from './cards.generator.js';

const play = false;

export function listenWord() {
  FRONT_CARD_TRAIN.forEach((key) => {
    let currentTarget;
    key.addEventListener('click', (e) => {
      if (play === false && BODY.classList.contains('on') === false) {
        currentTarget = cardsTrain[page][e.currentTarget.getAttribute('num')].audioSRC;
        AUDIO_WORD.src = currentTarget;
      }
    });
  });
}
