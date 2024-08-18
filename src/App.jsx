import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { Header } from "./components/Counter/Header/Header";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <h1>Lifecycle</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter 🙈" : "Show Counter 🐵"}
      </button>
      {/* <Counter /> */}
      {showCounter && <Counter />}
    </main>
  );
}
