```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly updating count using setCount
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```