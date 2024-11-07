import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Struggle from "./components/Struggle";

function App() {
  return (
    <div className="itim-regular text-[var(--highlight-color)]">
      <div className="grid gap-4 md:w-[80%] w-[90%] mx-auto md:grid-cols-3 grid-cols-1 md:mt-14 mt-8">
        {/* Div 2: Full-width on mobile, specific columns on larger screens */}
        <div className="md:order-2 order-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1">
          <Detail />
        </div>

        {/* Div 1: Full-width on mobile, specific columns on larger screens */}
        <div className="md:order-1 order-2 md:col-span-1 md:row-span-3 col-span-1 row-span-1">
          <Struggle />
        </div>

        {/* Div 3: Takes up one column and spans two rows */}
        <div className="md:col-span-1 md:row-span-2 md:order-3 order-4">
          <Skills />
        </div>

        {/* Div 4: Positioned in the last column and spans half the height of Skills */}
        <div className="md:col-span-1 md:row-span-1 md:order-4 order-3">
          <Projects />
        </div>

        {/* Div 5: Positioned below Projects and spans half the height of Skills */}
        <div className="md:col-span-1 md:row-span-1 order-5">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
