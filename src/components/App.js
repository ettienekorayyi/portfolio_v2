import React from "react";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { _404Page } from "./404/_404Page";
import { Contact } from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      
      <About />
      <_404Page />
      <Contact />
      {/**/}
    </div>
  );
}



export default App;


/*useRef*/
