import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const matchMedia = gsap.matchMedia();

matchMedia.add('(max-width: 1300px)', () => {
  const page1Elements = [
    '.page-1-bottom-svg-div > svg',
    '.page-1-top-informations-misc > span',
  ];
  const page1 = document.querySelector('.page-1');
  const page1Image = document.querySelector('.page-1-middle-picture-div > img');
  const page1ImageContainer = document.querySelector(
    '.page-1-middle-picture-div'
  );

  const page1Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: page1Image,
      start: 'top top',
      end: 'bottom 10%',
      scrub: true,
    },
  });

  page1Timeline.from(page1Elements, {}).to(page1Elements, {
    y: -100,
    opacity: 0,
    stagger: 0.25,
  });

  ScrollTrigger.create({
    trigger: page1,
    start: 'top top',
    end: 'bottom 5%',
    scrub: 1,
    animation: gsap.to(page1Image, {
      yPercent: -20,
      opacity: 0,
    }),
  });

  ScrollTrigger.create({
    trigger: page1,
    start: 'top top',
    end: 'bottom 5%',
    scrub: 1,
    animation: gsap.to(page1ImageContainer, {
      borderRadius: '0 0 50% 50%',
    }),
  });
});

matchMedia.add('(min-width: 1300px)', () => {
  const page1Elements = [
    '.page-1-bottom-svg-div > svg',
    '.page-1-top-informations-misc > span',
  ];
  const page1 = document.querySelector('.page-1');
  const page1Image = document.querySelector('.page-1-middle-picture-div > img');
  const page1ImageContainer = document.querySelector(
    '.page-1-middle-picture-div'
  );

  const page1Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: page1Image,
      start: 'top 5%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  page1Timeline.from(page1Elements, {}).to(page1Elements, {
    y: -100,
    opacity: 0,
    stagger: 0.25,
  });

  ScrollTrigger.create({
    trigger: page1,
    start: 'top top',
    end: 'bottom 5%',
    scrub: 1,
    animation: gsap.to(page1Image, {
      yPercent: -20,
      opacity: 0,
    }),
  });

  ScrollTrigger.create({
    trigger: page1,
    start: 'top top',
    end: 'bottom 5%',
    scrub: 1,
    animation: gsap.to(page1ImageContainer, {
      borderRadius: '0 0 50% 50%',
    }),
  });
});
