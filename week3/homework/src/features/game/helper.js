import { MATCH_STATUS } from "../../const/game.js";

export const pairKey = (cardId) => String(cardId).split('-')[0];

export const checkMatch = (flippedIds) => {
  if (flippedIds.length !== 2) return { status: MATCH_STATUS.WAITING };

  const [firstId, secondId] = flippedIds;
  if (pairKey(firstId) === pairKey(secondId)) {
    return { status: MATCH_STATUS.MATCH, ids: flippedIds };
  }
  return { status: MATCH_STATUS.MISMATCH, ids: flippedIds };
};

/**
 * requestAnimationFrame 기반 카운트다운 틱.
 * - endAt: 종료 시각(ms, Date.now() 기준)
 * - onTick: 초 단위 남은 시간 업데이트 (정수 초)
 * - onEnd: 0이 되면 호출
 * - rafRef: { current: number|null }  형태의 ref (취소용)
 */
export const countdownTick = (endAt, onTick, onEnd, rafRef) => {
  const now = Date.now();
  const diff = Math.max(0, endAt - now);

  const sec = Math.floor(diff / 100) / 10;
  onTick(sec);

  if (diff <= 0) {
    onEnd?.();
    return;
  }

  rafRef.current = requestAnimationFrame(() =>
    countdownTick(endAt, onTick, onEnd, rafRef),
  );
};

export const cancelRaf = (rafRef) => {
  if (rafRef?.current) {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }
};

export const createHistory = (valueA, valueB, matched) => {
  return {
    valueA,
    valueB,
    status: matched ? "성공" : "실패",
    date: new Date().toLocaleString(),
  };
};

export const buildIdToValue = (cards) => {
  const map = new Map();
  cards.forEach((card) => map.set(card.id, card.value));
  return map;
};

export const clearTimer = (timerRef) => {
  if (!timerRef) return;
  if (timerRef.current === null) return;

  clearTimeout(timerRef.current);
  timerRef.current = null;
};
