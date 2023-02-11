import "./App.css";
import "./styles/style.css";
import Parent from "./components/Parent";
import { createContext, useState } from "react";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setcount] = useState(0);

  const value = {
    count,
    setcount
  }
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
