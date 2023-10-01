import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const matchMedia = gsap.matchMedia();
const gridGallery = document.querySelector('.page-3-grid-gallery');
const containers = document.querySelectorAll(
  '.page-3-grid-gallery > .container'
);
const page3SvgPath = document.querySelectorAll('.page-3-svg-div > svg > path');

matchMedia.add('(min-width: 0px) and (max-width: 735px)', () => {
  containers.forEach((container) => {
    const image = container.querySelector('img');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridGallery,
        start: 'top 30%',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(image, {
      clipPath: 'inset(0 100% 0 0)',
      ease: 'expo.out',
      duration: 2,
      stagger: 1,
    });

    tl.to(image, {
      clipPath: 'inset(0 0% 0 0)',
      ease: 'expo.out',
      duration: 2,
      stagger: 1,
    });
  });

  const page3TimelineSvg = gsap.timeline({
    scrollTrigger: {
      trigger: page3SvgPath,
      start: 'top 45%',
      end: 'bottom 35%',
      scrub: true,
    },
  });

  page3TimelineSvg
    .from(page3SvgPath, {
      scale: 0.25,
      opacity: 0,
      y: 100,
      stagger: 0.25,
    })
    .to(page3SvgPath, {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
    });
});

matchMedia.add('(min-width: 735px)', () => {
  containers.forEach((container) => {
    const image = container.querySelector('img');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridGallery,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(image, {
      clipPath: 'inset(0 100% 0 0)',
      ease: 'expo.out',
      duration: 2,
      stagger: 1,
    });

    tl.to(image, {
      clipPath: 'inset(0 0% 0 0)',
      ease: 'expo.out',
      duration: 2,
      stagger: 1,
    });
  });

  const page3TimelineSvg = gsap.timeline({
    scrollTrigger: {
      trigger: page3SvgPath,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: true,
    },
  });

  page3TimelineSvg
    .from(page3SvgPath, {
      scale: 0.25,
      opacity: 0,
      y: 100,
      stagger: 0.25,
    })
    .to(page3SvgPath, {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
    });
});
