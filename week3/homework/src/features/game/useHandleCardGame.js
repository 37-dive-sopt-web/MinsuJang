import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { checkMatch } from "./helper.js";
import { CURRENT_STATE, GUIDE_MESSAGE, MATCH_STATUS } from "../../const/game.js";

export const useHandleCardGame = (deckInfo) => {
  const [flippedCards, setFlippedCards] = useState([]);         // ['6-a', '6-b']
  const [completeCards, setCompleteCards] = useState(() => new Set());
  const [currentState, setCurrentState] = useState(CURRENT_STATE.START);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  const isReady = deckInfo?.status === "ready";
  const total = deckInfo?.data?.length ?? 0;
  const guideMessage = GUIDE_MESSAGE[currentState];

  const idToValue = useMemo(() => {
    const map = new Map();
    deckInfo?.data?.forEach((card) => map.set(card.id, card.value));
    return map;
  }, [deckInfo?.data]);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const isFlipped = useCallback(
    (id) => flippedCards.includes(id) || completeCards.has(id),
    [flippedCards, completeCards],
  );
  const isComplete = useCallback((id) => completeCards.has(id), [completeCards]);

  const isAllComplete = useMemo(
    () => total > 0 && completeCards.size === total,
    [completeCards, total],
  );

  const resetFlipped = useCallback(() => setFlippedCards([]), []);
  const resetHistory = useCallback(() => setHistory([]), []);

  const resetCards = () => {
    clearTimer();
    resetFlipped();
    setCompleteCards(new Set());
    setCurrentState(CURRENT_STATE.START);
    resetHistory();
  };

  const handleFlipCard = useCallback(
    (id) => {
      if (!isReady) return;
      if (completeCards.has(id)) return;
      if (flippedCards.includes(id)) {
        setCurrentState(CURRENT_STATE.DUP);
        return;
      }
      if (flippedCards.length === 2) return;

      setFlippedCards((prev) => {
        const next = [...prev, id];

        if (next.length === 1) {
          setCurrentState(CURRENT_STATE.FIRST);
        }

        return next;
      });
    },
    [isReady, flippedCards, completeCards],
  );

  useEffect(() => {
    const result = checkMatch(flippedCards);
    if (result.status === MATCH_STATUS.WAITING) return;

    clearTimer();

    const [valueA, valueB] = result.ids.map((id) => idToValue.get(id));
    const status = result.status === MATCH_STATUS.MATCH ? "성공" : "실패";
    setHistory((prev) => [
      {
        valueA,
        valueB,
        status,
        time: Date.now(),
      },
      ...prev,
    ]);

    if (result.status === MATCH_STATUS.MATCH) {
      // 매치: 완료셋 반영 + 카드 닫기, END 여부 즉시 판정
      setCurrentState(CURRENT_STATE.MATCH);
      setCompleteCards((prev) => {
        const next = new Set([...prev, ...result.ids]);
        setFlippedCards([]);
        if (next.size === total) setCurrentState(CURRENT_STATE.END);
        return next;
      });
      return;
    }

    setCurrentState(CURRENT_STATE.MISMATCH);
    timerRef.current = setTimeout(() => {
      setFlippedCards([]);
      timerRef.current = null;
    }, 800);

    return () => {
      clearTimer();
    };
  }, [flippedCards, total, completeCards.size]);

  return {
    completeCards,
    guideMessage,
    history,
    isFlipped,
    isComplete,
    isAllComplete,
    handleFlipCard,
    resetFlipped,
    resetCards,
  };
};
