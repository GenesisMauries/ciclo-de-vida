import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // componentDidMount (Ya se monto)
  // useEffect(() => {
  //   console.log("OK useEffect, el componente se monto");
  // }, []);

  // componentDidUpdate (Cada que se actualiza el state)
  //   useEffect(() => {
  //     console.log("OK useEffect, el estado de actualizo");
  //   }, [count]);

  // componentWillUnmount (Se desmonta)
  useEffect(() => {
    console.log("useEffect chambeando");
    return () => {
      console.log("El componente se desmonta");
    };
  }, []);
  return (
    <article>
      <h3> Counter </h3>
      <p> Current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Increment the count ➕ 1️⃣
      </button>
    </article>
  );
};

export default Counter;
