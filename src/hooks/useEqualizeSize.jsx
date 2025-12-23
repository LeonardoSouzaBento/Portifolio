import { useEffect } from 'react';

const useEqualizeSize = (ref, setSize, wasResize, dimension = 'height') => {
  function updateSize() {
    if (ref.current) {
      if (dimension === 'height') {
        setSize(ref.current.scrollHeight);
      } else {
        setSize(ref.current.scrollWidth);
      }
    }
  }

  useEffect(() => {
    updateSize();
  }, []);

  useEffect(() => {
    updateSize();
  }, [wasResize]);
};

export default useEqualizeSize;
