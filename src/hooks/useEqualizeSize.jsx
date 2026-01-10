import { useLayoutEffect } from 'react';

const useEqualizeSize = (ref, setSize, resizingCounter, dimension = 'height') => {
  function updateSize() {
    if (ref.current) {
      if (dimension === 'height') {
        setSize(ref.current.scrollHeight);
      } else {
        setSize(ref.current.scrollWidth);
      }
    }
  }

  useLayoutEffect(() => {
    updateSize();
  }, []);

  useLayoutEffect(() => {
    updateSize();
  }, [resizingCounter]);
};

export default useEqualizeSize;
