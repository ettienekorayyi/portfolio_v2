import React from "react";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { _404Page } from "./404/_404Page";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <_404Page />
    </div>
  );
}



export default App;


/*useRef*/
