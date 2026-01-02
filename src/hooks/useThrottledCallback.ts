import { useCallback, useRef } from "react";

/**
 * useThrottledCallback
 * Returns a throttled version of a callback.
 *
 * @param callback - Function to throttle
 * @param delay - Delay in milliseconds
 */
export function useThrottledCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const lastExecuted = useRef<number>(0);

  return useCallback(
    ((...args: any[]) => {
      const now = Date.now();

      if (now - lastExecuted.current >= delay) {
        lastExecuted.current = now;
        callback(...args);
      }
    }) as T,
    [callback, delay]
  );
}
