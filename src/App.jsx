import { useState } from "react";

import App2 from "./login/App2";

import "./App.css";
import EjemploGit from "./EjemploGit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <App2/>


    {/* <EjemploGit/> */}
    


      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
