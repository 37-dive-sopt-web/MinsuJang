export const RANK_STORE_KEY = 'game_rank_history';

export const RANK_ERROR_MESSAGE = {
  LOAD: '데이터를 가져오는 중 문제가 발생했습니다.',
  SAVE: '데이터를 저장하는 중 문제가 발생했습니다.',
  RESET: '데이터를 초기화하는 중 문제가 발생했습니다.',
};

export const RANK_TABLE_HEAD = [
  { label: '순위', size: 8 },
  { label: '레벨', size: 12 },
  { label: '클리어 시간(초)', size: 30 },
  { label: '기록 시각', size: 50 },
];
