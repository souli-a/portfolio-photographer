import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  wheelMultiplier: 0.5,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
