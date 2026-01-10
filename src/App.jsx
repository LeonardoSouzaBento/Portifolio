import useResizeWatcher from '@/hooks/useResizingCounter';
import { useState, useEffect } from 'react';
import Hero from './components/hero';
import Nav from './components/nav';
import Technologies from './components/technologies';
import PatternBackground from '@/components/background/background';
import AboutMe from './components/aboutMe';
import Patterns from './components/patterns';
import Projects from './components/projects';
import Implementations from './components/implementations';
import Prev from './components/prev';

export const sectionStyles = 'max-w-6xl mx-auto mb-6';
export const cardStyles = 'p-4 py-[1cap] border rounded-lg';

function App() {
  const [resizingCounter, setResizingCounter] = useState(0);
  useResizeWatcher(setResizingCounter);

  useEffect(() => {
    setResizingCounter((prev) => prev + 1);
  }, []);

  return (
    <>
      <Nav />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        <PatternBackground resizingCounter={resizingCounter} />
        <Hero resizingCounter={resizingCounter} />
        <Technologies />
        <AboutMe resizingCounter={resizingCounter} />
        <Patterns />
        <Projects />
        <Prev />
        <Implementations />
      </main>
    </>
  );
}

export default App;
