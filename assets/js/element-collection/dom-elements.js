'use strict';

// App Wrapper
const appWrapper = document.querySelector('.wrapper');

// App Components
const appHeader = document.querySelector('.wrapper__header');
const appCategory = document.querySelector('.wrapper__category');
const appInstruction = document.querySelector('.wrapper__game-instruction');
const appPreGameCountdown = document.querySelector('.wrapper__countdown');
const appGame = document.querySelector('.wrapper__game');
const appEndGameStatistic = document.querySelector('.wrapper__end-game');
const appFooter = document.querySelector('.wrapper__footer');

// Header
const headerTitle = document.querySelector('.header__title');
const headerThemeToggleBtn = document.querySelector('.header__theme-toggle');
const headerMenuBtn = document.querySelector('.header__menu');

// Section Elements
const categoryTitle = document.querySelector('.category__title--label');
const categoryFlag = document.querySelector('.category__flag');
const categoryCapital = document.querySelector('.category__capital');

// Cards
const flagCard = document.querySelector('.category__card--flag');
const capitalCard = document.querySelector('.category__card--capital');

// Footer Buttons
const nextQuestion = document.querySelector('.footer__next-question--btn');
const resetBtn = document.querySelector('.footer__reset-btn');
const backBtn = document.querySelector('.footer__back-btn');
const linkedInBtn = document.querySelector('.footer__linkedin');
const gitHubBtn = document.querySelector('.footer__github');

// Footer Icons
const resetBtnSvg = document.querySelector('.footer__reset-btn--svg');
const backBtnSvg = document.querySelector('.footer__back-btn--svg');
const linkedInBtnSvg = document.querySelector('.footer__linkedin--svg');
const gitHubBtnSvg = document.querySelector('.footer__github--svg');

// Pre Game Countdown
const countDownContainer = document.querySelector('.countdown');
const countDownLabel = document.querySelector('.countdown__label');

// Game Stats
const gameTimerLabel = document.querySelector('.game__time--label');
const gameScoreLabel = document.querySelector('.game__score--label');
const gameHighScoreLabel = document.querySelector('.game__highscore--label');

// Game Question
const gameQuestionLabel = document.querySelector('.game__question--label');

// Game Flag // Front and back image
const gameFlagImg = document.querySelectorAll('.game__flag--img');
const gameFlagsContainer = document.querySelector('.game__flags');
const gameFlagImgFront = document.querySelector('.game__flag--img-front');
const gameFlagImgBack = document.querySelector('.game__flag--img-back');

// Game Buttons
const startGameBtn = document.querySelector('.btn__start-game');
const gameAnswersBtns = Array.from(document.querySelectorAll('.game__answer-btn'));

// End Game Statistic
const endGameLabelText = document.querySelector('.end-game__score--label-text');
const endGameLabelValue = document.querySelector('.end-game__score--label-value');
const endGameQuestionCount = document.querySelector('.end-game__question-opened');
const endGameQuestionCorrect = document.querySelector('.end-game__question-correct');
const endGameHighScore = document.querySelector('.end-game__highscore');

// Game reset/restart
const resetGameBtn = document.querySelector('.reset-modal__btn-reset');
const restartGameBtn = document.querySelector('.restart-modal__btn-restart');

export {
    appWrapper,
    appHeader,
    appCategory,
    appInstruction,
    appPreGameCountdown,
    appGame,
    appEndGameStatistic,
    appFooter,
    headerTitle,
    headerThemeToggleBtn,
    headerMenuBtn,
    categoryTitle,
    categoryCapital,
    categoryFlag,
    capitalCard,
    flagCard,
    nextQuestion,
    resetBtn,
    backBtn,
    linkedInBtn,
    gitHubBtn,
    resetBtnSvg,
    backBtnSvg,
    linkedInBtnSvg,
    gitHubBtnSvg,
    startGameBtn,
    countDownContainer,
    countDownLabel,
    gameTimerLabel,
    gameHighScoreLabel,
    gameQuestionLabel,
    gameScoreLabel,
    gameFlagsContainer,
    gameFlagImg,
    gameFlagImgFront,
    gameFlagImgBack,
    gameAnswersBtns,
    endGameLabelText,
    endGameLabelValue,
    endGameQuestionCount,
    endGameQuestionCorrect,
    endGameHighScore,
    resetGameBtn,
    restartGameBtn,
};
