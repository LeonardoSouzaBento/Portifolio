"use client";
import { useLayoutEffect, useRef, useState } from "react";

export function useMouseScrollX(
  parentRef,
  wrapperRef,
  resizeConut,
  scrollStart = "start",
) {
  const [parentWidth, setParentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const inertiaFrame = useRef(null);

  // velocidade
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);

  // configs
  const VELOCITY_THRESHOLD = 0.5;
  const INERTIA_MULTIPLIER = 300;
  const MAX_EXTRA_SCROLL = 500;

  useLayoutEffect(() => {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper) return;

    const updateSizes = () => {
      setParentWidth(parent.offsetWidth);
      setScrollWidth(wrapper.scrollWidth);
    };

    updateSizes();
  }, [resizeConut]);

  /* 🔹 Scroll inicial */
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (scrollWidth <= parentWidth) return;

    if (scrollStart === "center") {
      el.scrollLeft = Math.max(0, (scrollWidth - parentWidth) / 2);
    } else {
      el.scrollLeft = 0;
    }
  }, [scrollStart, scrollWidth, parentWidth, wrapperRef]);

  /* 🔹 Drag + inércia */
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (scrollWidth <= parentWidth) return;

    const maxScroll = scrollWidth - parentWidth;
    const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

    const onMouseDown = (e) => {
      if (inertiaFrame.current) {
        cancelAnimationFrame(inertiaFrame.current);
        inertiaFrame.current = null;
      }

      isDragging.current = true;
      startX.current = e.pageX;
      startScrollLeft.current = el.scrollLeft;

      lastX.current = e.pageX;
      lastTime.current = performance.now();
      velocity.current = 0;

      el.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;

      const deltaX = e.pageX - startX.current;
      el.scrollLeft = clamp(startScrollLeft.current - deltaX, 0, maxScroll);

      const now = performance.now();
      const dx = e.pageX - lastX.current;
      const dt = now - lastTime.current;

      if (dt > 0) velocity.current = dx / dt;

      lastX.current = e.pageX;
      lastTime.current = now;
    };

    const applyInertia = () => {
      const v = velocity.current;
      if (Math.abs(v) < VELOCITY_THRESHOLD) return;

      let extraScroll = -v * INERTIA_MULTIPLIER;
      extraScroll = clamp(extraScroll, -MAX_EXTRA_SCROLL, MAX_EXTRA_SCROLL);

      const start = el.scrollLeft;
      const target = clamp(start + extraScroll, 0, maxScroll);
      const duration = 400;
      const startTime = performance.now();

      const animate = (time) => {
        const progress = clamp((time - startTime) / duration, 0, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        el.scrollLeft = start + (target - start) * easeOut;

        if (progress < 1) {
          inertiaFrame.current = requestAnimationFrame(animate);
        }
      };

      inertiaFrame.current = requestAnimationFrame(animate);
    };

    const stopDragging = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      applyInertia();
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", stopDragging);
    el.addEventListener("mouseleave", stopDragging);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", stopDragging);
      el.removeEventListener("mouseleave", stopDragging);
    };
  }, [wrapperRef, scrollWidth, parentWidth]);
}
