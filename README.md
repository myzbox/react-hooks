# @myzbox/react-hooks

![npm](https://img.shields.io/npm/v/@myzbox/react-hooks)
![npm downloads](https://img.shields.io/npm/dw/@myzbox/react-hooks)
![license](https://img.shields.io/npm/l/@myzbox/react-hooks)
![types](https://img.shields.io/badge/types-TypeScript-blue)
![react](https://img.shields.io/badge/react-%3E%3D18-blue)

A growing collection of reusable, production-ready React custom hooks.

Designed to be lightweight, type-safe, and easy to integrate into any React project.

---

## 📦 Installation

```bash
npm install @myzbox/react-hooks
yarn add @myzbox/react-hooks
```

## 🔧 Available Hooks

- useDebounce
- useDebouncedCallback
- useThrottle
- useThrottledCallback

More hooks will be added incrementally.

## 🚀 useDebounce

Debounces a value and updates it only after the specified delay.

---

### JavaScript Usage

```jsx
import { useState, useEffect } from "react";
import { useDebounce } from "@myzbox/react-hooks";

function SearchInput() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    console.log("Debounced value:", debouncedValue);
  }, [debouncedValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchInput;
```

### TypeScript Usage

```tsx
import { useState, useEffect } from "react";
import { useDebounce } from "@myzbox/react-hooks";

function SearchInput() {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    console.log("Debounced value:", debouncedValue);
  }, [debouncedValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchInput;
```

### API

```ts
useDebounce<T>(value: T, delay: number): T
```

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| `value`   | `T`      | Value to debounce     |
| `delay`   | `number` | Delay in milliseconds |

### 🧠 When to Use

- Search inputs
- Auto-save forms
- API call optimization
- Filtering large lists

## 🚀 useDebouncedCallback

Debounces a function and executes it only after the specified delay.

---

### JavaScript Usage

```jsx
import { useDebouncedCallback } from "@myzbox/react-hooks";

function SearchInput() {
  const onSearch = useDebouncedCallback((value) => {
    console.log("Searching for:", value);
  }, 500);

  return (
    <input placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
  );
}
```

### TypeScript Usage

```tsx
import { useDebouncedCallback } from "@myzbox/react-hooks";

function SearchInput() {
  const onSearch = useDebouncedCallback((value: string) => {
    console.log("Searching for:", value);
  }, 500);

  return (
    <input placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
  );
}
```

### API

```ts
useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T
```

### When to Use

- Search inputs
- Resize handlers
- Prevent excessive API calls

## 🚀 useThrottle

Throttles a value so it updates at most once per specified delay.

---

### JavaScript Usage

```jsx
import { useThrottle } from "@myzbox/react-hooks";

const throttledValue = useThrottle(value, 300);
```

### API

```ts
useThrottle<T>(value: T, delay: number): T
```

### When to Use

- Scroll events
- Window resize
- Mouse move tracking
- High-frequency state updates

### 🚀 useThrottledCallback

Throttles a function so it executes at most once per delay.

---

### JavaScript Usage

```jsx
import { useThrottledCallback } from "@myzbox/react-hooks";

const onScroll = useThrottledCallback(() => {
  console.log("Scrolling...");
}, 200);

window.addEventListener("scroll", onScroll);
```

### API

```ts
useThrottledCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T
```

### When to Use

- Scroll listeners
- Mouse move handlers
- Performance-sensitive callbacks

## 🛣 Roadmap

See ROADMAP.md for upcoming hooks.
