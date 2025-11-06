import { RANK_ERROR_MESSAGE, RANK_STORE_KEY } from "../../const/rank.js";
import { sortRankings, updateRanking } from "./helper.js";

export const getRanking = () => {
  try {
    const response = localStorage.getItem(RANK_STORE_KEY);
    const rankings = response ? JSON.parse(response) : [];
    return sortRankings(rankings);
  } catch (error) {
    alert(RANK_ERROR_MESSAGE.LOAD);
  }
};

export const saveRanking = (request) => {
  try {
    const updated = updateRanking(request);
    localStorage.setItem(RANK_STORE_KEY, JSON.stringify(updated));
  } catch (error) {
    alert(RANK_ERROR_MESSAGE.SAVE);
  }
};

export const resetRanking = () => {
  try {
    localStorage.removeItem(RANK_STORE_KEY);
  } catch (error) {
    alert(RANK_ERROR_MESSAGE.RESET);
  }
};
