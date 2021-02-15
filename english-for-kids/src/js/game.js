import { page } from './cards.generator.js';
import {
  BUTTON_GAME,
  FRONT_CARD_TRAIN,
  AUDIO_WORD,
  AUDIO_GAME,
  CARD_TRAIN,
  RATING_BLOCK,
  HEADER_BLOCK,
  CARDS_TRAIN_CONTENT,
  CARD_CATEGORY_CONTENT,
  SWITCH,
  BODY,
  COUNT,
} from './constants.js';
import { cardsTrain } from './cards.train.js';
import { shuffle } from './service.js';

let sound = [];
let correct = 0;
let currentSound = 0;
let errors = 0;
let gameStart = true;
let star;
const count = ['first', 'second', 'third', 'fourth', 'fifes', 'six', 'sevens', 'eighth'];
export function playGame() {
  BUTTON_GAME.addEventListener('click', () => {
    if (gameStart) {
      for (let i = 0; i < CARD_TRAIN.length; i++) {
        sound.push(cardsTrain[page][COUNT[i]].audioSRC);
        cardsTrain.sound[cardsTrain[page][COUNT[i]].audioSRC] = COUNT[i];
        BUTTON_GAME.innerHTML = '&#8635';
      }
      shuffle(sound);
      BUTTON_GAME.classList.add('repeat');
      FRONT_CARD_TRAIN.forEach((key) => {
        key.classList.add('front-play');
      });
      gameStart = false;
    }
    AUDIO_WORD.src = sound[currentSound];
  });
}
FRONT_CARD_TRAIN.forEach((key) => {
  key.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('front-play')) {
      if (e.currentTarget.getAttribute('num') === cardsTrain.sound[sound[currentSound]]) {
        star = document.createElement('img');
        key.parentNode.classList.add('inactive');
        e.currentTarget.classList.remove('front-play');
        AUDIO_GAME.src = '../assets/audio/game/correct.mp3';
        AUDIO_WORD.src = sound[currentSound + 1];
        star.src = '../assets/img/icon/positive-vote.svg';
        RATING_BLOCK.appendChild(star);
        currentSound++;
        correct++;
        if (correct === CARD_TRAIN.length) {
          goBackToMain();
        }
      } else {
        star = document.createElement('img');
        AUDIO_GAME.src = '../assets/audio/game/oh.mp3';
        star.src = '../assets/img/icon/say-no.svg';
        RATING_BLOCK.appendChild(star);
        errors++;
      }
    }
  });
});

function goBackToMain() {
  CARD_TRAIN.forEach((key) => {
    key.classList.add('no_active');
  });
  BUTTON_GAME.classList.add('no_active');
  RATING_BLOCK.classList.add('text');
  HEADER_BLOCK.classList.add('no_active');
  if (errors === 0) {
    RATING_BLOCK.classList.add('win_the_game');
    setTimeout(() => {
      RATING_BLOCK.classList.remove('win_the_game');
    }, 6000);
    RATING_BLOCK.innerHTML = 'win!';
    AUDIO_GAME.src = '../assets/audio/game/yes.mp3';
  } else {
    RATING_BLOCK.classList.add('defeat_the_game');
    setTimeout(() => {
      RATING_BLOCK.classList.remove('defeat_the_game');
    }, 6000);
    RATING_BLOCK.innerHTML = `NO! NO! NO! <br /> ${errors} errors`;
    AUDIO_GAME.src = '../assets/audio/game/oops.mp3';
  }
  setTimeout(() => {
    defaultRemove();
    CARD_CATEGORY_CONTENT.classList.remove('no_active');
    CARDS_TRAIN_CONTENT.classList.add('no_active');
  }, 6000);
}

export function defaultRemove() {
  FRONT_CARD_TRAIN.forEach((key) => {
    key.classList.remove('front-play');
  });
  document.querySelectorAll('.inactive').forEach((key) => {
    key.classList.remove('inactive');
  });
  CARD_TRAIN.forEach((key) => {
    key.classList.remove('no_active');
  });
  document.querySelector('.active_item').classList.remove('active_item');
  document.querySelector('.item__menu').classList.add('active_item');
  BUTTON_GAME.classList.remove('repeat');
  HEADER_BLOCK.classList.remove('no_active');
  RATING_BLOCK.classList.remove('text');
  RATING_BLOCK.innerHTML = '';
  BUTTON_GAME.classList.add('no_active');
  CARDS_TRAIN_CONTENT.classList.remove('game_state');
  BUTTON_GAME.innerText = 'Start game';
  BODY.classList.remove('on');
  SWITCH.checked = false;
  sound = [];
  gameStart = true;
  correct = 0;
  currentSound = 0;
  errors = 0;
  cardsTrain.sound = {};
}
