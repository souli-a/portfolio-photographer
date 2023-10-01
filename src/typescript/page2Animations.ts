import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const matchMedia = gsap.matchMedia();

const paragraphs = document.querySelectorAll('.page-2-paragraph');
const page2SvgPaths = document.querySelectorAll('.page-2-svg-div > svg > path');
const page1Svg = document.querySelector('.page-1-bottom-svg-div');

matchMedia.add('(min-width: 0px) and (max-width: 335px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top 10%',
      end: 'bottom 10%',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 25%',
        end: 'bottom 30%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});

matchMedia.add('(min-width: 335px) and (max-width: 420px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top 10%',
      end: 'bottom 10%',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 30%',
        end: 'bottom 35%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});

matchMedia.add('(min-width: 420px) and (max-width: 550px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top 25%',
      end: 'bottom top',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 40%',
        end: 'bottom 40%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});

matchMedia.add('(min-width: 550px) and (max-width: 700px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 30%',
        end: 'bottom 40%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});

matchMedia.add('(min-width: 700px) and (max-width: 850px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top 30%',
      end: 'bottom 30%',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});

matchMedia.add('(min-width: 850px) and (max-width: 1100px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top 30%',
      end: 'bottom 30%',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 85%',
        end: 'bottom 60%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});

matchMedia.add('(min-width: 1100px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: page1Svg,
      start: 'top 10%',
      end: 'bottom 10%',
      scrub: true,
    },
  });

  tl.from(page2SvgPaths, {
    scale: 0.25,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  });

  tl.to(page2SvgPaths, {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  });

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent) {
      const chars = [...paragraph.textContent.trim()];

      paragraph.textContent = '';

      for (const char of chars) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        paragraph.appendChild(charSpan);
      }
    }

    const spans = paragraph.querySelectorAll(':scope > span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphs,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: true,
      },
    });

    tl.from(spans, {
      opacity: 0,
      stagger: 0.1,
    });

    tl.to(spans, {
      opacity: 1,
    });
  });
});
