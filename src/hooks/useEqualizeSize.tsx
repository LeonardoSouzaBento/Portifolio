import { useLayoutEffect, useEffect, type RefObject } from "react";

export const useEqualizeSize = (
  ref: RefObject<HTMLDivElement | null>,
  setSize: (size: number) => void,
  resizeCount: number,
  dimension = "height"
) => {
  function updateSize() {
    if (ref.current) {
      if (dimension === "height") {
        setSize(ref.current.scrollHeight);
      } else {
        setSize(ref.current.scrollWidth);
      }
    }
  }

  useEffect(() => {
    updateSize();
  }, []);

  useLayoutEffect(() => {
    updateSize();
  }, [resizeCount]);
};
