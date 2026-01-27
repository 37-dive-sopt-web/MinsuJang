import { getRanking } from "./rankStore.js";

export const updateRanking = (newRanking) => {
  const prevRanking = getRanking();
  return [...prevRanking, newRanking];
};

/**
 * @Param{{ level: number, time: number, date: string }[]} rankings
 */
export const sortRankings = (rankings) => {
  if (rankings.length === 0) {
    return [];
  }
  return [...rankings].sort((a, b) => {
    if (a.level !== b.level) {
      return b.level - a.level;
    }
    return a.time - b.time;
  });
};
