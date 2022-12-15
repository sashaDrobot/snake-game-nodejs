const GAME_SPEED = 250;

const DEFAULT_SNAKE_LENGTH = 3;

const DEFAULT_BOARD_WIDTH = 15;
const DEFAULT_BOARD_HEIGHT = 15;

const BOARD_CHARACTER = '·';
const SNAKE_CHARACTER = 'o';
const FOOD_CHARACTER = '';

const UP_DIRECTION = 'up';
const DOWN_DIRECTION = 'down';
const RIGHT_DIRECTION = 'right';
const LEFT_DIRECTION = 'left';

const DIRECTION_SHIFTS = {
  [UP_DIRECTION]: {
    x: 0,
    y: -1,
  },
  [DOWN_DIRECTION]: {
    x: 0,
    y: 1,
  },
  [RIGHT_DIRECTION]: {
    x: 1,
    y: 0,
  },
  [LEFT_DIRECTION]: {
    x: -1,
    y: 0,
  },
};

module.exports = {
  GAME_SPEED,
  DEFAULT_SNAKE_LENGTH,
  DEFAULT_BOARD_WIDTH,
  DEFAULT_BOARD_HEIGHT,
  BOARD_CHARACTER,
  SNAKE_CHARACTER,
  FOOD_CHARACTER,
  UP_DIRECTION,
  DOWN_DIRECTION,
  RIGHT_DIRECTION,
  LEFT_DIRECTION,
  DIRECTION_SHIFTS,
};
