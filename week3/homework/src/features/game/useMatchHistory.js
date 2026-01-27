import { useCallback, useState } from "react";

/**
 * @description 카드 매치 히스토리 관리 훅
 */
export const useMatchHistory = () => {
  const [histories, setHistories] = useState([]);

  const pushHistories = useCallback((newHistories) => {
    setHistories((prevHistories) => [newHistories, ...prevHistories]);
  }, []);

  const resetHistories = useCallback(() => {
    setHistories([]);
  }, []);

  return { histories, pushHistories, resetHistories };
};
