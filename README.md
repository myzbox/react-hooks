# @myzbox/react-hooks

A growing collection of reusable, production-ready React custom hooks.

Designed to be lightweight, type-safe, and easy to integrate into any React project.

---

## 📦 Installation

```bash
npm install @myzbox/react-hooks
yarn add @myzbox/react-hooks
```

## 🔧 Available Hooks

useDebounce ✅

More hooks will be added incrementally.

## 🚀 useDebounce

Debounces a value and updates it only after the specified delay.

Usage

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

```jsx
import { useState, useEffect } from "react";
import { useDebounce } from "@myzbox/react-hooks";

function SearchInput() {
  const [value, setValue] = useState < string > "";
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

```jsx
useDebounce<T>(value: T, delay: number): T
```

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| `value`   | `T`      | Value to debounce     |
| `delay`   | `number` | Delay in milliseconds |

## 🧠 When to Use

Search inputs

Auto-save forms

API call optimization

Filtering large lists

## 🛣 Roadmap

See ROADMAP.md for upcoming hooks.
