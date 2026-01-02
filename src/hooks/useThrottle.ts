import { useEffect, useRef, useState } from "react";

/**
 * useThrottle
 * Throttles a value so it updates at most once per delay.
 *
 * @param value - Value to throttle
 * @param delay - Delay in milliseconds
 */
export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(0);

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      lastExecuted.current = now;
      setThrottledValue(value);
    }

    const timer = setTimeout(() => {
      if (Date.now() - lastExecuted.current >= delay) {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }
    }, delay - (now - lastExecuted.current));

    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
}
