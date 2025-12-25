import { useRef } from 'react';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function About() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    SplitText.create('.about-text', {
      type: 'lines, chars',
      onSplit(self) {
        gsap.set(self.chars, {
          opacity: 0.25,
        });

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 1,
          },
        });
      },
    });
  });

  return (
    <div
      ref={aboutRef}
      className='relative h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] z-10'
    >
      <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl leading-tight'>
        My approach combines clean design, smooth interactions, and thoughtful
        details to ensure every project feels both visually striking and highly
        functional. Whether it's designing a portfolio, building a business
        website, or shaping a brand's online presence, I focus on creating work
        that not only looks good but also connects with people in a meaningful
        way.
      </div>
    </div>
  );
}

export default About;
