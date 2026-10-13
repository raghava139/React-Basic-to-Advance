# React Class-Based Components — Notes

## 1. Class-Based Components vs Functional Components

React components let us build reusable pieces of UI.

### Functional Component

A functional component is a JavaScript function that returns JSX.

```jsx
function User(props) {
  return <h1>Name: {props.name}</h1>;
}

export default User;
```

Using the component:

```jsx
<User name="Raghavendra" />
```

### Class-Based Component

A class-based component is a JavaScript class that extends `React.Component`. It must provide a `render()` method that returns JSX.

```jsx
import React from "react";

class User extends React.Component {
  render() {
    return <h1>Name: {this.props.name}</h1>;
  }
}

export default User;
```

Using the component:

```jsx
<User name="Raghavendra" />
```

### Key Differences

| Topic | Functional Component | Class-Based Component |
|---|---|---|
| Definition | JavaScript function | JavaScript class extending `React.Component` |
| Props | `props.name` or destructuring | `this.props.name` |
| State | `useState()` Hook | `this.state` |
| Updating state | State setter, e.g. `setCount()` | `this.setState()` |
| Side effects / lifecycle | Commonly `useEffect()` | Lifecycle methods |
| UI | Returns JSX | `render()` returns JSX |

Functional components are the common choice in modern React, but understanding class components helps when working with older codebases and learning React lifecycle concepts.

---

## 2. How to Use Props in Class-Based Components

**Props** are values passed from a parent component to a child component. They are read-only from the child's perspective.

### Parent component

```jsx
<UserClass name="Raghavendra" location="Kadapa" />
```

### Child component

```jsx
import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
```

### Remember

- `this` refers to the current class component instance.
- `this.props` contains the props passed by the parent.
- `this.props.name` reads the `name` prop.
- Do not modify props directly.

---

## 3. How to Create a State Variable in a Class Component

**State** is data managed by a component. When state changes, React can re-render the component to show the updated UI.

A common way to initialize state is in the constructor:

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2
    };
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <h2>Count 2: {this.state.count2}</h2>
      </div>
    );
  }
}

export default Counter;
```

### Understand the syntax

- `constructor(props)` initializes the class instance.
- `super(props)` calls the parent class constructor. In a derived class constructor, call it before accessing `this`.
- `this.state` is an object that holds the component's state.
- `count` and `count2` are properties in that state object.
- `this.state.count` reads the current count value.

A constructor is not required if you do not need one for initialization; class fields can also initialize state:

```jsx
state = {
  count: 0,
  count2: 2
};
```

---

## 4. How to Update State in a Class Component

Use **`this.setState()`** to update state. Do not directly mutate state.

```jsx
import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    count2: 2
  };

  handleIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      count2: prevState.count2 + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <h2>Count 2: {this.state.count2}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```

### Important points

- `this.setState()` schedules a state update and a re-render.
- In class components, object updates passed to `setState()` are **shallowly merged** with the existing state object.
- The functional form `this.setState((prevState) => ...)` is recommended when the next value depends on the previous state.
- Avoid direct mutation such as `this.state.count = this.state.count + 1`.

---

## 5. Lifecycle Methods

Lifecycle methods let a class component run code at particular stages of its life.

The main stages are:

1. **Mounting** — the component is added to the UI.
2. **Updating** — the component re-renders because its props or state changed.
3. **Unmounting** — the component is removed from the UI.

### A. `componentDidMount()`

Runs after the component has mounted and its initial DOM changes have been committed.

Common uses:
- Fetch initial data from an API.
- Start a timer.
- Set up subscriptions or event listeners.

### B. `componentDidUpdate(prevProps, prevState)`

Runs after an update has been committed. It can compare previous props/state with current props/state to decide whether more work is needed.

Common uses:
- Respond to a prop change.
- Fetch new data when a particular prop changes.
- Synchronize with an external system after an update.

**Important:** If calling `this.setState()` inside `componentDidUpdate()`, use a condition to prevent an infinite update loop.

### C. `componentWillUnmount()`

Runs as the component is being removed. Use it to clean up resources.

Common uses:
- Clear timers and intervals.
- Remove event listeners.
- Unsubscribe from subscriptions.
- Abort an in-flight request when appropriate.

---

## 6. Why Use `componentDidMount()` for an API Call?

An API call is a **side effect** because it communicates with an external system (a server), rather than merely calculating the UI.

A typical flow is:

```text
constructor()
    ↓
Initialize initial state
    ↓
render()
    ↓
React commits the initial DOM
    ↓
componentDidMount()
    ↓
Start API request
    ↓
API response arrives
    ↓
this.setState({ userInfo: response })
    ↓
render() runs again
    ↓
React commits the updated DOM
    ↓
componentDidUpdate() runs
```

The first render can display a loading message or placeholder UI. When the response arrives, `setState()` schedules an update, and React renders the data.

You do not need `componentDidUpdate()` merely to display the API response. The state update already triggers the re-render.

### Example

```jsx
import React from "react";

class UserClassAPI extends React.Component {
  state = {
    userInfo: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.github.com/users/raghava139"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const userInfo = await response.json();

      this.setState({
        userInfo,
        loading: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false
      });
    }
  }

  render() {
    const { userInfo, loading, error } = this.state;

    if (loading) {
      return <p>Loading user...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <img src={userInfo.avatar_url} alt="GitHub avatar" width="120" />
        <h2>Name: {userInfo.login}</h2>
        <p>URL: {userInfo.html_url}</p>
        <p>ID: {userInfo.id}</p>
      </div>
    );
  }
}

export default UserClassAPI;
```

---

## 7. Render Phase vs Commit Phase

React's work can be understood in two broad phases.

### Render Phase — Figure Out the UI

- React calls the component's `render()` method.
- React calculates what the next UI should look like.
- React determines what changes may be needed.
- The render phase should be pure: do not perform API calls, start timers, or mutate external systems during rendering.
- React may repeat or abandon render work before committing it.

### Commit Phase — Apply the Changes

- React applies the necessary changes to the DOM.
- After the initial mount is committed, `componentDidMount()` runs.
- After an update is committed, `componentDidUpdate()` runs.
- During removal, `componentWillUnmount()` is called as part of unmounting/commit work.

### Easy memory aid

- **Render phase:** What should the UI look like?
- **Commit phase:** Apply the necessary UI changes.

---

## 8. Timer Example: Mount and Cleanup

```jsx
import React from "react";

class About extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Interval running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h1>About Page</h1>;
  }
}

export default About;
```

### How does `this.timer` work?

- `setInterval()` returns an interval ID.
- `this.timer = ...` stores that ID as a property on the current component instance.
- `componentWillUnmount()` can access the same property and pass the ID to `clearInterval()`.
- `this.timer` is an ordinary JavaScript instance property; it does not need to be declared in the constructor first.

`componentWillUnmount()` only runs when React actually removes the component from the tree. If the component remains rendered, the cleanup will not run yet.

---

## 9. Lifecycle Methods vs `useEffect()`

Functional components use `useEffect()` for many of the same synchronization tasks handled by class lifecycle methods.

| Class component | Functional component |
|---|---|
| `componentDidMount()` | `useEffect(() => { ... }, [])` for mount-related setup |
| `componentDidUpdate()` | `useEffect(() => { ... }, [dependency])` for synchronization when a dependency changes |
| `componentWillUnmount()` | Cleanup function returned from `useEffect()` |

These are useful comparisons, but they are **not exact one-to-one equivalents**. For example, an effect with dependencies runs after the initial mount and again when its dependencies change. In development Strict Mode, React may also run an extra setup-and-cleanup cycle to help find bugs.

### Functional timer example

```jsx
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval running");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>About Page</h1>;
}

export default About;
```

The returned function cleans up the timer when the component unmounts and before the effect re-runs when needed.

---

## 10. Interview Quick Revision

- **Props:** Read-only values passed from a parent.
- **State:** Component-owned data that can trigger re-rendering.
- **`this.props`:** Access props in a class component.
- **`this.state`:** Read the class component's state object.
- **`this.setState()`:** Schedule a state update and re-render.
- **`render()`:** Return the JSX that describes the UI.
- **`componentDidMount()`:** Run after the initial mount is committed.
- **`componentDidUpdate()`:** Run after an update is committed.
- **`componentWillUnmount()`:** Clean up as the component is removed.
- **Render phase:** Calculate the next UI.
- **Commit phase:** Apply necessary changes to the DOM.
- **Side effect:** Work such as an API call, timer, subscription, or external-system synchronization.
- **Cleanup:** Stop or undo work that should not continue after it is no longer needed.

### Lifecycle flow to memorize

```text
INITIAL MOUNT
constructor()
    ↓
render()
    ↓
DOM commit
    ↓
componentDidMount()

UPDATE
props/state change
    ↓
render()
    ↓
DOM commit
    ↓
componentDidUpdate()

UNMOUNT
componentWillUnmount()
    ↓
Component removed / cleanup
```
