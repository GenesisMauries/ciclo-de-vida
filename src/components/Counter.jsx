import { useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <article>
      <h3> Counter </h3>
      <p> Current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment the count ➕ 1️⃣</button>
    </article>
  );
};

export default Counter;
