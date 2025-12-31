/**
 * Common utility types for @myzbox/react-hooks
 */

/**
 * Generic callback type
 */
export type Callback<T = void> = (...args: any[]) => T;

/**
 * Debounce options (future extensibility)
 */
export interface DebounceOptions {
  delay: number;
  leading?: boolean;
  trailing?: boolean;
}

/**
 * Async hook state
 */
export interface AsyncState<T> {
  loading: boolean;
  data?: T;
  error?: Error;
}

/**
 * Nullable helper
 */
export type Nullable<T> = T | null;
