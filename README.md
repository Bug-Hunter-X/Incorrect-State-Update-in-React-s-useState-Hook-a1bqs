# Incorrect State Update in React's useState Hook

This repository demonstrates a common mistake when using React's `useState` hook: directly modifying the state variable instead of using the setter function provided by the hook. This leads to unexpected behavior because the component won't re-render, and the UI will not reflect the changes made to the state.

The `bug.js` file shows the incorrect implementation, and `bugSolution.js` provides the correct way to update state using the setter function.