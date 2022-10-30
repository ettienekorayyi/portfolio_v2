import React, { useRef, useEffect,useState } from "react";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { _404Page } from "./404/_404Page";
import { Contact } from "./contact/Contact";
import { HoverSideNav } from "./navigation/HoverSideNav";

/*
  1. Go to the component and make it component use forwardRef: 
     ie export const Contact = forwardRef((props, ref) => {});
  2. Go back to App component and create 2 variables:
     ie: 
     const [home,setHome] = useState();
     const homeRef = useRef();
  3. Go to the App component's useEffect and add the setter in it.
    ie: useEffect(() => {
      ...
      setHome(homeRef);
    })
  4. Pass the ref as props to the component:
    ie: <Home ref={homeRef} />
  5. Pass the state called home in the HoverSide nav
    ie: <HoverSideNav home={home} />
*/
function App() {
  const [home,setHome] = useState();
  const [contact,setContact] = useState();
  const [about,setAbout] = useState();
  const homeRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    if (contactRef !== undefined && aboutRef !== undefined && homeRef !== undefined) {
      setContact(contactRef);
      setAbout(aboutRef);
      setHome(homeRef);
    }
  });

  //console.log(contact);
  //console.log(about);

  return (
    <div className="App">
      <HoverSideNav contact={contact} about={about} home={home} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <_404Page />
      <Contact ref={contactRef} />
      {/**/}
    </div>
  );
}



export default App;


/*useRef*/
