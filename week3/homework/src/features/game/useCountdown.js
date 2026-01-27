import { useEffect, useRef, useState } from "react";

export const useCountdown = (second = 3, isOn, onEnd) => {
  const [countdown, setCountdown] = useState(second);
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  useEffect(() => {
    if (!isOn) {
      setCountdown(second);
      return;
    }

    const tick = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(tick);
          onEndRef.current?.();
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [second, isOn, onEnd]);

  return { countdown };
};
