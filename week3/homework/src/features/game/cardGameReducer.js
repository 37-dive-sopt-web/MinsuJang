import { CURRENT_STATE } from "../../const/game.js";

export const ACTION = {
  TOTAL: "TOTAL",
  RESET: "RESET",
  FLIP: "FLIP_REQUEST",
  MATCH: "MATCH",
  MISMATCH: "MISMATCH",
};

export const initialGameState = (total = 0) => ({
  flipped: [],
  completed: new Set(),
  phase: CURRENT_STATE.START,
  total,
});

export const cardGameReducer = (state, action) => {
  switch (action.type) {
    case ACTION.TOTAL:
      return { ...initialGameState(action.total ?? 0) };

    case ACTION.RESET:
      return { ...initialGameState(state.total) };

    case ACTION.FLIP: {
      const { id, isReady } = action;
      if (!isReady) return state;
      if (state.completed.has(id)) return state;
      if (state.flipped.includes(id)) return { ...state, phase: CURRENT_STATE.DUP };
      if (state.flipped.length === 2) return state;

      const flipped = [...state.flipped, id];
      const phase = flipped.length === 1 ? CURRENT_STATE.FIRST : CURRENT_STATE.WAIT;
      return { ...state, flipped, phase };
    }

    case ACTION.MATCH: {
      const { ids } = action;
      const completed = new Set([...state.completed, ...ids]);
      const end = completed.size === state.total;
      return {
        ...state,
        flipped: [],
        completed,
        phase: end ? CURRENT_STATE.END : CURRENT_STATE.MATCH,
      };
    }

    case ACTION.MISMATCH: {
      if (action.close) {
        return { ...state, flipped: [] };
      }
      return { ...state, phase: CURRENT_STATE.MISMATCH };
    }

    default:
      return state;
  }
};
