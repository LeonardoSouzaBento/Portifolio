import { useLayoutEffect } from 'react';

export const useEqualizeSize = (ref, setSize, resizeCount, dimension = 'height') => {
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
  }, [resizeCount]);
};
