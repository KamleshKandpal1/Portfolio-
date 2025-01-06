import { useEffect } from "react";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Struggle from "./components/Struggle";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sm:w-[60%] lg:w-[40%]  mx-auto sm:my-10 p-2 sm:p-0 h-full manrope">
      {/* Div 1: Full-width on mobile, specific columns on larger screens */}
      <div className="mb-2">
        <Detail />
      </div>

      {/* Div 2: Full-width on mobile, specific columns on larger screens */}
      <div className="mb-2">
        <Stats />
      </div>
      {/* Div 2: Full-width on mobile, specific columns on larger screens */}
      <div className="mb-2">
        <Struggle />
      </div>

      {/* Div 3: Takes up one column and spans two rows */}
      <div className="mb-2">
        <Skills />
      </div>

      {/* Div 4: Positioned in the last column and spans half the height of Skills */}
      <div className="mb-2">
        <Projects />
      </div>

      {/* Div 5: Positioned below Projects and spans half the height of Skills */}
      <div className="">
        <Contact />
      </div>
    </div>
  );
}

export default App;
