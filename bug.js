```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting count directly
    count = count + 1; // This will NOT trigger a re-render
  }, []);

  return <div>Count: {count}</div>;
}
```