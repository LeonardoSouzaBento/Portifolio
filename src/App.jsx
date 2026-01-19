import useResizeWatcher from '@/hooks/useResizingCounter';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

export const cardStyles = 'p-4 py-[1cap] border rounded-lg';

function App() {
  const [resizingCounter, setResizingCounter] = useState(0);
  useResizeWatcher(setResizingCounter);

  useEffect(() => {
    setResizingCounter((prev) => prev + 1);
    setTimeout(() => {
      setResizingCounter((prev) => prev + 1);
    }, 300);
  }, []);

  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Routes>
          <Route path="/" element={<Home resizingCounter={resizingCounter} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
