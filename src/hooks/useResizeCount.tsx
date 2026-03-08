import type { StateSetter } from '@/types';
import { useEffect, useRef } from 'react';

export function useResizeCount(setResizeCount: StateSetter<number>) {
  const windowWidthInitialRef = useRef<number | null>(null);
  const resizeDowntime = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    windowWidthInitialRef.current = window.innerWidth;

    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }

      resizeDowntime.current = setTimeout(() => {
        const widthOfWindow = window.innerWidth;

        if (
          windowWidthInitialRef.current !== null &&
          widthOfWindow !== windowWidthInitialRef.current
        ) {
          setResizeCount((prev: number) => prev + 1);
          windowWidthInitialRef.current = widthOfWindow;
        }
      }, 500);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, [setResizeCount]);
}
