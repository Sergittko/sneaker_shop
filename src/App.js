import { useState } from "react";

function App() {
   let [count, change] = useState(0);
   return (
      <div className="App">
         <p>{count}</p>
         <button onClick={change(change => ++change)}>
            Add count
         </button>
      </div>
   );
}

export default App;
