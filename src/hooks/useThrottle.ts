import { useEffect, useRef, useCallback } from 'react';

interface ThrottledFunction<T extends (...args: any[]) => void> {
  (...args: Parameters<T>): void;
}

export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): ThrottledFunction<T> {
  const previousCallback = useRef<T>(callback);
  const previousTime = useRef<number>(0);

  useEffect(() => {
    previousCallback.current = callback;
  }, [callback]);

  const throttledFunction = useCallback<ThrottledFunction<T>>(
    (...args: Parameters<T>) => {
      const now = new Date().getTime();
      const timeDiff = now - previousTime.current;
      if (timeDiff >= delay) {
        previousCallback.current(...args);
        previousTime.current = now;
      }
    },
    [delay],
  );

  return throttledFunction;
}
