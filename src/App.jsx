import { useResizeCount } from '@/hooks/useResizeCount';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  const [resizeCount, setResizeCount] = useState(0);
  useResizeCount(setResizeCount);

  useEffect(() => {
    setTimeout(() => {
      setResizeCount((prev) => prev + 1);
    }, 100);
    setTimeout(() => {
      setResizeCount((prev) => prev + 1);
    }, 200);
  }, []);

  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Routes>
          <Route path="/" element={<Home resizeCount={resizeCount} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
