import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) {
      return;
    }

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        ease: "ease.out",
        duration: 0.2,
      })
      .to(elementToAnimate.current, {
        y: 0,
        ease: "bounce.out",
        duration: 1,
      })
      .pause();
  }, []);

  useEffect(() => {
    // if (counter < 10) return;
    // console.log("%cse paso de 10", "color:red;");
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
