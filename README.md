# React 19 useState Consecutive Calls Issue

This repository demonstrates a subtle issue in React 19 related to calling the `useState` setter function multiple times in rapid succession.  The problem arises when the updates aren't properly batched, leading to unexpected behavior.  The solution provided focuses on either using functional updates or batching updates for reliable state management.

## Problem
When calling `setCount` twice rapidly, the second call overrides the first, resulting in an unexpected count increment.  This is less noticeable with slower updates but becomes more apparent when dealing with frequent or asynchronous updates.

## Solution
The solution involves consistently using functional updates (`prevCount => prevCount + 1`). This guarantees the updates correctly use the previous state value.  Alternatively, for complex updates, leveraging techniques like `useReducer` or libraries for state management improves update predictability.
