import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
const MAXIMUN = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log("se paso de 10");

    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      ease: "ease.out",
      duration: 0.2,
    }).to(counterElement.current, {
      y: 0,
      ease: "bounce.out",
      duration: 1,
    });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
