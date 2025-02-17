```javascript
// In a React 19 functional component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Correct way
    setCount(prevCount => prevCount + 1); // Problem: second setCount is called before the first one finishes updating
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```