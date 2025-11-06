export const MATCH_STATUS = {
  WAITING: 'WAITING',
  MATCH: 'MATCH',
  MISMATCH: 'MISMATCH',
};

export const GAME_GRID_SIZE = {
  1: { columns: 4, rows: 4, size: 80 },
  2: { columns: 6, rows: 4, size: 60 },
  3: { columns: 6, rows: 6, size: 60 },
};

export const INITIAL_LEVEL = 1;

export const LEVEL_OPTIONS = [
  { label: "Level 1", value: 1 },
  { label: "Level 2", value: 2 },
  { label: "Level 3", value: 3 },
];

export const CURRENT_STATE = {
  START: 'START',
  WAIT: 'WAIT',
  FIRST: 'FIRST',
  DUP: 'CLICK',
  MATCH: 'MATCH',
  MISMATCH: 'MISMATCH',
  END: 'END',
};

export const GUIDE_MESSAGE = {
  [CURRENT_STATE.START]: '카드를 눌러 게임을 시작',
  [CURRENT_STATE.MISMATCH]: '실패!',
  [CURRENT_STATE.MATCH]: '성공!',
  [CURRENT_STATE.DUP]: '이미 선택한 카드에요!',
  [CURRENT_STATE.FIRST]: '카드를 하나 더 선택하세요',
  [CURRENT_STATE.END]: '모든 짝을 맞추셨습니다!',
};

export const GAME_PLAY_TIME = {
  1: 45,
  2: 60,
  3: 100,
};
