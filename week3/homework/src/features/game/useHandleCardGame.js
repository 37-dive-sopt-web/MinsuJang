import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { buildIdToValue, checkMatch, clearTimer, createHistory } from "./helper.js";
import { GUIDE_MESSAGE, MATCH_STATUS, MISMATCH_CLOSE_TIME } from "../../const/game.js";
import { useMatchHistory } from "./useMatchHistory.js";
import { ACTION, cardGameReducer, initialGameState } from "./cardGameReducer.js";

export const useHandleCardGame = (deckInfo) => {
  const isReady = deckInfo?.status === "ready";
  const total = deckInfo?.data?.length ?? 0;

  const [state, dispatch] = useReducer(cardGameReducer, total, initialGameState);
  const timerRef = useRef(null);
  const { histories, pushHistories, resetHistories } = useMatchHistory();

  useEffect(() => {
    dispatch({ type: ACTION.TOTAL, total });
    resetHistories();
  }, [total, resetHistories]);

  const guideMessage = useMemo(() => GUIDE_MESSAGE[state.phase] ?? "", [state.phase]);
  const idToValue = useMemo(() => buildIdToValue(deckInfo?.data ?? []), [deckInfo?.data]);

  const isFlipped = useCallback(
    (id) => state.flipped.includes(id) || state.completed.has(id),
    [state.completed, state.flipped],
  );
  const isComplete = useCallback((id) => state.completed.has(id), [state.completed]);

  const isAllComplete = useMemo(
    () => state.total > 0 && state.completed.size === state.total,
    [state.completed, state.total],
  );

  const resetFlipped = useCallback(() => {
    dispatch({ type: ACTION.MISMATCH, close: true });
  }, []);

  const resetCards = useCallback(() => {
    clearTimer(timerRef);
    dispatch({ type: ACTION.RESET });
    resetHistories();
  }, [resetHistories]);

  const handleFlipCard = useCallback(
    (id) => {
      dispatch({ type: ACTION.FLIP, id, isReady });
    },
    [isReady],
  );

  useEffect(() => {
    if (state.flipped.length !== 2) return;

    const result = checkMatch(state.flipped);
    if (result.status === MATCH_STATUS.WAITING) return;

    clearTimer(timerRef);

    const [a, b] = result.ids;
    const matched = result.status === MATCH_STATUS.MATCH;

    pushHistories(createHistory(idToValue.get(a), idToValue.get(b), matched));

    if (matched) {
      dispatch({ type: ACTION.MATCH, ids: result.ids });
      return;
    }

    dispatch({ type: ACTION.MISMATCH });
    timerRef.current = setTimeout(() => {
      dispatch({ type: ACTION.MISMATCH, close: true });
      timerRef.current = null;
    }, MISMATCH_CLOSE_TIME);

    return () => clearTimer(timerRef);
  }, [state.flipped, idToValue, pushHistories]);

  return {
    completeCards: state.completed,
    guideMessage,
    histories,
    isFlipped,
    isComplete,
    isAllComplete,
    handleFlipCard,
    resetFlipped,
    resetCards,
  };
};
