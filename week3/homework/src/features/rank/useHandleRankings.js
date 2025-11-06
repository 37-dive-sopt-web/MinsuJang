import { useState } from "react";
import { resetRanking } from "./rankStore.js";

export const useHandleRankings = (data) => {
  const [rankings, setRankings] = useState(data);

  const reset = () => {
    setRankings([]);
    resetRanking();
  };

  return { rankings, reset };
};
