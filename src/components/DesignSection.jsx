import React, { useRef } from 'react';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import './DesignSection.css';

const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top-=500 top',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: '10%' }, 'key1')
      .fromTo(textTwo.current, { x: 0 }, { x: '-10%' }, 'key1');

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <section className="section" ref={container}>
      <div className="text-container" ref={textOne}>
        <span>Flaw-less design with strong durability.</span>
      </div>

      <div className="text-container2" ref={textTwo}>
        <span>Flat-edge design with toughest smartphone glass.</span>
      </div>
    </section>
  );
};

export default DesignSection;
