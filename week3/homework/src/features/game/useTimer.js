import { useCallback, useEffect, useRef, useState } from "react";
import { cancelRaf, countdownTick } from "./helper.js";

export const useTimer = (duration = 45, trigger) => {
  const [remainSec, setRemainSec] = useState(duration);
  const [isOver, setIsOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const rafRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const startTimer = useCallback((sec = duration) => {
    if (isRunning) return;
    cancelRaf(rafRef);
    setIsOver(false);
    setIsRunning(true);
    setRemainSec(sec);

    const endAt = Date.now() + sec * 1000;
    countdownTick(
      endAt,
      (sec) => setRemainSec(sec),
      () => {
        setIsOver(true);
        setIsRunning(false);
      },
      rafRef,
    );
  }, [duration, isRunning]);

  const stopTimer = useCallback(() => {
    cancelRaf(rafRef);
    setIsOver(true);
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback((sec = duration) => {
    cancelRaf(rafRef);
    setIsOver(false);
    setIsRunning(false);
    setRemainSec(sec);
  }, [duration]);

  useEffect(() => {
    if (!trigger || trigger === lastTriggerRef.current) return;
    lastTriggerRef.current = trigger;
  }, [trigger, duration, startTimer]);

  const formattedTime = remainSec.toFixed(1);

  return { formattedTime, isOver, isRunning, startTimer, stopTimer, resetTimer };
};
