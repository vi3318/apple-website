import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./DisplaySection.css";

gsap.registerPlugin(ScrollTrigger);

const TextAnimationComponent = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: text1Ref.current,
        start: "top right",
        end: "top left",
        scrub: true,
      },
    });

    tl1.fromTo(
      text1Ref.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 2, ease: "power2.out" }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: text2Ref.current,
        start: "bottom right",
        end: "bottom left ",
        scrub: true,
      },
    });

    tl2.fromTo(
      text2Ref.current,
      { x: "100%",y: "50%",  opacity: 0 },
      { x: "0%", y: "50%", opacity: 1, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="text-animation-container">
      <div className="text-animation-item2 right " ref={text1Ref}>
        <h1>Flaw-Less Design With Strong Durability.</h1>
      </div>
      <div className="text-animation-item1 left " ref={text2Ref}>
        <h1>Flat-Edge Design With Toughest Smartphone Glass.</h1>
      </div>
    </div>
  );
};

export default TextAnimationComponent;
