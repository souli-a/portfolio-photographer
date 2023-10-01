import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const matchMedia = gsap.matchMedia();

matchMedia.add('(min-width: 0px) and (max-width: 650px)', () => {
  const page5Svg = document.querySelector('.page-4-svg-div');
  const page5SvgPath = document.querySelectorAll(
    '.page-4-svg-div > svg > path'
  );

  const svgTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });

  svgTimeline.from(page5SvgPath, {
    scale: 0.1,
    opacity: 0,
    stagger: 0.25,
    y: 100,
  });

  svgTimeline.to(page5SvgPath, {
    scale: 1,
    opacity: 1,
    y: 0,
  });

  const inputElements = [
    '.page-4-input-name-phone input:nth-child(1)',
    '.page-4-input-name-phone input:nth-child(2)',
    '.page-4-contact-div input[type="email"]',
    '.page-4-contact-div textarea',
  ];

  const inputsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top center',
      end: 'bottom 35%',
      scrub: true,
    },
  });

  inputsTimeline.from(inputElements, {
    y: 100,
    opacity: 0,
    stagger: 0.25,
  });

  inputsTimeline.to(inputElements, {
    y: 0,
    opacity: 1,
  });

  const sendButton = document.querySelector('.page-4-contact-div > button');

  ScrollTrigger.create({
    trigger: page5Svg,
    start: 'top 40%',
    end: 'bottom 40%',
    scrub: 1,
    animation: gsap.from(sendButton, {
      width: '60%',
      opacity: 0,
      y: 100,
    }),
  });

  const buttonElements = [
    '.page-4-social-div :nth-child(1)',
    '.page-4-social-div :nth-child(2)',
    '.page-4-social-div :nth-child(3)',
  ];

  const socialButtonTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top 37%',
      end: 'bottom 37%',
      scrub: true,
    },
  });

  socialButtonTimeline.from(buttonElements, {
    y: 100,
    opacity: 0,
    stagger: 2,
  });

  socialButtonTimeline.to(buttonElements, {
    y: 0,
    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: 'footer',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: 1,
    animation: gsap.from('footer', {
      opacity: 0,
    }),
  });
});

matchMedia.add('(min-width: 650px) and (max-width: 920px)', () => {
  const page5Svg = document.querySelector('.page-4-svg-div');
  const page5SvgPath = document.querySelectorAll(
    '.page-4-svg-div > svg > path'
  );

  const svgTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });

  svgTimeline.from(page5SvgPath, {
    scale: 0.1,
    opacity: 0,
    stagger: 0.25,
    y: 100,
  });

  svgTimeline.to(page5SvgPath, {
    scale: 1,
    opacity: 1,
    y: 0,
  });

  const inputElements = [
    '.page-4-input-name-phone input:nth-child(1)',
    '.page-4-input-name-phone input:nth-child(2)',
    '.page-4-contact-div input[type="email"]',
    '.page-4-contact-div textarea',
  ];

  const inputsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top center',
      end: 'bottom 35%',
      scrub: true,
    },
  });

  inputsTimeline.from(inputElements, {
    y: 100,
    opacity: 0,
    stagger: 0.25,
  });

  inputsTimeline.to(inputElements, {
    y: 0,
    opacity: 1,
  });

  const sendButton = document.querySelector('.page-4-contact-div > button');

  ScrollTrigger.create({
    trigger: sendButton,
    start: 'top 70%',
    end: 'bottom 70%',
    scrub: 1,
    animation: gsap.from(sendButton, {
      width: '60%',
      opacity: 0,
      y: 100,
    }),
  });

  const buttonElements = [
    '.page-4-social-div :nth-child(1)',
    '.page-4-social-div :nth-child(2)',
    '.page-4-social-div :nth-child(3)',
  ];

  const socialButtonTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top 30%',
      end: 'bottom 30%',
      scrub: true,
    },
  });

  socialButtonTimeline.from(buttonElements, {
    y: 100,
    opacity: 0,
    stagger: 2,
  });

  socialButtonTimeline.to(buttonElements, {
    y: 0,
    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: 'footer',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: 1,
    animation: gsap.from('footer', {
      opacity: 0,
    }),
  });
});

matchMedia.add('(min-width: 920px)', () => {
  const page5Svg = document.querySelector('.page-4-svg-div');
  const page5SvgPath = document.querySelectorAll(
    '.page-4-svg-div > svg > path'
  );

  const svgTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });

  svgTimeline.from(page5SvgPath, {
    scale: 0.1,
    opacity: 0,
    stagger: 0.25,
    y: 100,
  });

  svgTimeline.to(page5SvgPath, {
    scale: 1,
    opacity: 1,
    y: 0,
  });

  const inputElements = [
    '.page-4-input-name-phone input:nth-child(1)',
    '.page-4-input-name-phone input:nth-child(2)',
    '.page-4-contact-div input[type="email"]',
    '.page-4-contact-div textarea',
  ];

  const inputsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: page5Svg,
      start: 'top center',
      end: 'bottom 20%',
      scrub: true,
    },
  });

  inputsTimeline.from(inputElements, {
    y: 100,
    opacity: 0,
    stagger: 0.25,
  });

  inputsTimeline.to(inputElements, {
    y: 0,
    opacity: 1,
  });

  const sendButton = document.querySelector('.page-4-contact-div > button');

  ScrollTrigger.create({
    trigger: inputElements[3],
    start: 'top center',
    end: 'bottom 80%',
    scrub: 1,
    animation: gsap.from(sendButton, {
      width: '60%',
      opacity: 0,
    }),
  });

  const buttonElements = [
    '.page-4-social-div :nth-child(1)',
    '.page-4-social-div :nth-child(2)',
    '.page-4-social-div :nth-child(3)',
  ];

  const socialButtonTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: inputElements[3],
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: true,
    },
  });

  socialButtonTimeline.from(buttonElements, {
    y: 100,
    opacity: 0,
    stagger: 2,
  });

  socialButtonTimeline.to(buttonElements, {
    y: 0,
    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: 'footer',
    start: 'top 98%',
    end: 'bottom 98%',
    scrub: 1,
    animation: gsap.from('footer', {
      opacity: 0,
    }),
  });
});
