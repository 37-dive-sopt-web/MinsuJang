import { GAME_PLAY_TIME } from "../../const/game.js";
import { useTimer } from "./useTimer.js";
import useModal from "../common/useModal.js";
import { useCallback, useEffect, useRef } from "react";
import { useCountdown } from "./useCountdown.js";
import { saveRanking } from "../rank/rankStore.js";

export const useGameFlow = (level, status, isAllComplete, onFlip, onRestart) => {
  const totalTime = GAME_PLAY_TIME[level] ?? GAME_PLAY_TIME["1"];
  const { formattedTime, isRunning, startTimer, stopTimer, resetTimer } = useTimer(totalTime, status);

  const { isOpen, openModal, closeModal } = useModal();
  const savedOnceRef = useRef(false);

  const { countdown } = useCountdown(3, isOpen, () => {
    closeModal();
    savedOnceRef.current = false;
    resetTimer();
    onRestart();
  });

  // 카드 뒤집기 관리
  const handleFlip = useCallback((id) => {
    if (!isRunning && status === 'ready') {
      startTimer();
    }
    onFlip(id);
  }, [isRunning, status, startTimer, onFlip]);

  // 게임 초기화 버튼 클릭 시 필요한 초기화 함수
  const handleResetGame = useCallback(() => {
    savedOnceRef.current = false;
    resetTimer(totalTime);
    onRestart(level);
  }, [level, onRestart, resetTimer, totalTime]);

  const handleChangeLevel = useCallback((level) => {
    const nextTotal = GAME_PLAY_TIME[level] ?? GAME_PLAY_TIME["1"];
    savedOnceRef.current = false;
    resetTimer(nextTotal);
    onRestart(level);
  }, [onRestart, resetTimer]);

  // 게임 완료 시 모달 제어 및 랭킹 저장
  useEffect(() => {
    if (!isAllComplete || savedOnceRef.current) return;
    if (!isOpen) {
      stopTimer();
      openModal();
    }

    const clearTimer = () => Math.max(0, totalTime - Number(formattedTime));
    saveRanking({ level: level, time: clearTimer(), date: new Date().toLocaleString() });
    savedOnceRef.current = true;
  }, [isAllComplete, isOpen, level, formattedTime, stopTimer, openModal, totalTime]);

  useEffect(() => {
    if (Number(formattedTime) === 0 && !isAllComplete && !savedOnceRef.current) {
      stopTimer();
      if (!isOpen) openModal();
      savedOnceRef.current = true;
    }
  }, [formattedTime, isAllComplete, stopTimer, openModal, isOpen]);

  return { formattedTime, isRunning, isOpen, countdown, closeModal, handleFlip, handleResetGame, handleChangeLevel };
};
