# React Hooks: `useMemo`, `useCallback`, and `useRef`

A practical study guide for React interviews, with examples, common
mistakes, and a comparison table.

## 1. Quick mental model

-   **`useMemo`** caches the *result of a calculation* between renders
    while its dependencies remain unchanged.
-   **`useCallback`** caches the *function reference* between renders
    while its dependencies remain unchanged.
-   **`useRef`** preserves a mutable object across renders. Changing
    `.current` does **not** trigger a re-render.

Remember:

> `useMemo` = remember a value\
> `useCallback` = remember a function\
> `useRef` = remember a mutable value without causing a render

These hooks solve different problems. They are not automatically needed
in every component.

------------------------------------------------------------------------

## 2. `useMemo`

### What it does

`useMemo` lets React reuse the result of a calculation instead of
recalculating it on every render, as long as its dependencies have not
changed.

### Syntax

``` jsx
const cachedValue = useMemo(() => calculateSomething(a, b), [a, b]);
```

-   First argument: a calculation function.
-   Second argument: dependencies used by that calculation.
-   When a dependency changes, React recalculates the value.
-   When dependencies stay the same, React can reuse the cached result.

### Example: expensive filtering

``` jsx
import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Monitor" },
];

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products"
      />

      <button onClick={() => setCount((current) => current + 1)}>
        Unrelated count: {count}
      </button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </section>
  );
}
```

Changing `count` re-renders the component, but the filtering calculation
can be skipped because `query` has not changed. Changing `query`
recalculates the filtered list.

### When to use it

-   A calculation is measurably expensive.
-   A stable derived object or array helps a memoized child avoid
    unnecessary renders.
-   Profiling shows the calculation is a performance bottleneck.

### Common mistake

Do not use `useMemo` just to make every variable "faster." It adds
complexity and has its own overhead. For simple calculations, calculate
the value directly.

------------------------------------------------------------------------

## 3. `useCallback`

### What it does

`useCallback` caches a function definition/reference between renders
until one of its dependencies changes.

### Syntax

``` jsx
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);
```

It does not call the function for you; it returns a cached function
reference.

### Example: `React.memo` and a child component

``` jsx
import { memo, useCallback, useState } from "react";

const ChildButton = memo(function ChildButton({ onClick }) {
  console.log("ChildButton rendered");
  return <button onClick={onClick}>Child action</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((current) => current + 1)}>
        Increase count
      </button>

      <button
        onClick={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      >
        Theme: {theme}
      </button>

      <ChildButton onClick={handleChildClick} />
    </div>
  );
}
```

`Parent` can re-render when `count` or `theme` changes. Because
`handleChildClick` retains the same function reference, `React.memo` can
skip rendering `ChildButton` if its other props also remain unchanged.

### Why dependencies matter

``` jsx
const handleAdd = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

The callback uses `count`, so `count` belongs in the dependency list.
When `count` changes, React creates a new callback reference.

For state updates based on the previous value, a functional update can
avoid reading `count` from the closure:

``` jsx
const handleAdd = useCallback(() => {
  setCount((current) => current + 1);
}, []);
```

### `React.memo` and `useCallback` together

-   `React.memo` can skip rendering a child when its props are shallowly
    equal.
-   `useCallback` can keep a callback prop's reference stable.
-   Used together, they can prevent a changed function reference from
    needlessly invalidating the child's memoization.
-   Neither hook requires the other. Use them when there is a meaningful
    performance reason.

### Common mistake

`useCallback` does not make the function body execute faster. It
memoizes the function reference. It is most useful when reference
identity matters, such as for memoized child props or hook dependencies.

------------------------------------------------------------------------

## 4. `useRef`

### What it does

`useRef(initialValue)` returns an object with a `.current` property.
React preserves that ref object between renders of the same mounted
component.

``` jsx
const ref = useRef(initialValue);
```

Changing `ref.current` does not trigger a re-render.

### Example A: normal variable vs state vs ref

``` jsx
import { useRef, useState } from "react";

export default function ReferenceExample() {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);

  console.log("Component rendering...");

  return (
    <div>
      <button onClick={() => {
        x += 1;
        console.log("normal variable:", x);
      }}>
        Increase X
      </button>
      <p>Local variable: {x}</p>

      <button onClick={() => setY((current) => current + 1)}>
        Increase Y
      </button>
      <p>State: {y}</p>

      <button onClick={() => {
        z.current += 1;
        console.log("ref:", z.current);
      }}>
        Increase Z
      </button>
      <p>Ref: {z.current}</p>
    </div>
  );
}
```

What to observe:

1.  `x` is initialized to `0` on every render. Its changes are lost on
    the next render.
2.  Updating `y` triggers a re-render, and React preserves the state
    value.
3.  Updating `z.current` does not trigger a re-render. The ref value
    persists, but the text displaying it may remain stale until another
    render happens.
4.  If you click Increase Z several times and then click Increase Y, the
    next render reads the latest `z.current` value.

**Important:** Do not rely on changing a ref during rendering to update
displayed UI. Use state for data that should appear reactively in the
UI.

### Example B: use a ref to focus a real DOM input

``` jsx
import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current?.focus()}>
        Focus input
      </button>
    </div>
  );
}
```

React assigns the actual input DOM element to `inputRef.current` after
the element is mounted. Calling `.focus()` operates on that DOM element
directly and does not itself require a React re-render.

### Is `useRef` the same as direct DOM manipulation?

No. A ref can hold any JavaScript value, such as a number, timer ID, or
object. When attached to a DOM element, it provides access to that DOM
node, which allows imperative operations such as focusing, measuring, or
scrolling.

Updating an ordinary ref value does not bypass the Virtual DOM to update
rendered text. React does not automatically re-render when `.current`
changes.

### `useRef` vs `useState`

Use `useState` when a change should update the UI. Use `useRef` when you
need to preserve a mutable value without triggering a render, or need
access to a DOM element.

### Common use cases

-   Focusing an input.
-   Storing a timer ID.
-   Keeping a mutable value between renders that does not itself need to
    appear in the UI.
-   Measuring or scrolling a DOM element.

------------------------------------------------------------------------

## 5. Comparison table

| Feature | `useMemo` | `useCallback` | `useRef` |
|---|---|---|---|
| **What does it remember?** | The result of a calculation | A function reference | A mutable value or a DOM element reference |
| **What do you get back?** | The calculated value | The function | An object containing `.current` |
| **When does it update?** | Recalculates when a dependency changes | Returns a new function when a dependency changes | `.current` changes when you assign to it |
| **Does changing it trigger a re-render?** | No, not by itself | No, not by itself | No |
| **Main purpose** | Avoid repeating expensive calculations | Keep a function reference stable when reference identity matters | Preserve values without triggering renders, or access DOM elements |
| **Example use case** | Filtering a large product list | Passing a stable callback to a memoized child | Focusing an input or storing a timer ID |

### One-line memory trick

- **`useMemo`:** remembers a calculated **value**.
- **`useCallback`:** remembers a **function reference**.
- **`useRef`:** remembers a mutable **`.current` value** without triggering a render when it changes.

## 6. Common interview questions

### Q1. What is the difference between `useMemo` and `useCallback`?

`useMemo` caches the result of running a calculation. `useCallback`
caches the function reference itself.

Conceptually:

``` jsx
const value = useMemo(() => calculate(a), [a]);
const callback = useCallback(() => doSomething(a), [a]);
```

### Q2. Does `useRef` trigger a re-render?

No. Mutating `ref.current` does not schedule a render. Updating state
does.

### Q3. Does `useRef` preserve its value across renders?

Yes, for the same mounted component instance. If the component unmounts
and mounts again, a new ref is created.

### Q4. If `useCallback` is used, will a memoized child always skip rendering?

No. The child can still render if another prop changes, its own state
changes, or its consumed context changes. `useCallback` only helps keep
that particular function reference stable while dependencies remain
unchanged.

### Q5. Should every function use `useCallback` and every value use `useMemo`?

No. Use memoization when it solves a real performance or
reference-stability problem. Measure when appropriate and keep the code
simple.

### Q6. Can I use `useRef` instead of `useState` for text displayed on screen?

Usually not. Ref updates do not trigger re-renders, so displayed output
will not reliably update. Use state when the UI should react to the
value changing.

### Q7. Does changing `useRef` directly manipulate the DOM?

Not by itself. Updating `.current` only changes the ref object's
property. If `.current` contains a DOM element, calling a method such as
`.focus()` operates on that DOM element.

------------------------------------------------------------------------

## 7. Final memory trick

-   **Memo = value** --- `useMemo`
-   **Callback = function** --- `useCallback`
-   **Ref = persistent mutable reference, no automatic render** ---
    `useRef`

For interviews, be ready to explain not only what each hook does, but
**when it is useful, what it does not do, how dependencies work, and why
unnecessary memoization should be avoided**.
