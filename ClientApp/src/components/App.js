import React, { useRef, useEffect,useState } from "react";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { _404Page } from "./404/_404Page";
import { Contact } from "./contact/Contact";
import { HoverSideNav } from "./navigation/HoverSideNav";
import { Projects } from "./projects/Projects";

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
  const [projects,setProjects] = useState();

  const homeRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    if (
      contactRef !== undefined  && 
      aboutRef !== undefined    && 
      homeRef !== undefined     && 
      projectsRef !== undefined
    ) {
      setContact(contactRef);
      setAbout(aboutRef);
      setHome(homeRef);
      setProjects(projectsRef);
    }
  });

  return (
    <div className="App">
      <HoverSideNav contact={contact} about={about} home={home} projects={projects} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      {/*<_404Page />*/}
    </div>
  );
}



export default App;


/*useRef*/
