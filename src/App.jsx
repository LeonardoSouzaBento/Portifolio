import useResizeWatcher from '@/hooks/useResizeWatcher';
import { useState } from 'react';
import Hero from './components/hero';
import Nav from './components/nav';
import Technologies from './components/technologies';
import PatternBackground from '@/components/background/background';
import AboutMe from './components/aboutMe';
import Patterns from './components/patterns';

export const sectionStyles = 'max-w-6xl mx-auto mb-6';
export const cardStyles = 'p-4 pt-2 border rounded-lg';

function App() {
  const [wasResize, setWasResize] = useState(0);
  useResizeWatcher(setWasResize);

  return (
    <>
      <Nav />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        <PatternBackground wasResize={wasResize} />
        <Hero wasResize={wasResize} />
        <Technologies />
        <AboutMe wasResize={wasResize}/>
        <Patterns />

      </main>
    </>
  );
}

export default App;
