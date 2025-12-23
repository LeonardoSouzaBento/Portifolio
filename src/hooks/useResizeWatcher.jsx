import { useEffect, useRef } from "react";

function useResizeWatcher(setWasResize) {
  const windowWidthInitialRef = useRef(null);
  const resizeDowntime = useRef(null);

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
          setWasResize((prev) => prev + 1);
          windowWidthInitialRef.current = widthOfWindow;
        }
      }, 500);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, [setWasResize]);
}

export default useResizeWatcher;