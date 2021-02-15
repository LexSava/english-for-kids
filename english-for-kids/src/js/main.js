import { includesSwitch } from './switch.js';
import { flipsCardBack, goesToCategories } from './service.js';
import { createsCardNav, createsCardMain } from './cards.generator.js';
import { listenWord } from './sound.js';
import { playGame } from './game.js';

// SWITCH

includesSwitch();

// CARDS TRAIN

flipsCardBack();

// MENU NAVIGATION

createsCardNav();

// CARDS CATEGORY MENU

createsCardMain();

// LOGO LINCK

goesToCategories();

// SOUND

listenWord();

// GAME

playGame();
//------------------------------------------------------------------------
