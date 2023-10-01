import gsap from 'gsap';

let percentage = 0;

gsap.from('.percentage-display', {
  autoAlpha: 0,
});

gsap.to('.percentage-display', {
  autoAlpha: 1,
});

function getRandomInterval() {
  return Math.floor(Math.random() * 600);
}

function updatePercentageDisplay() {
  const randomInterval = getRandomInterval();
  const percentageDisplay = document.querySelector(
    '.percentage-display'
  ) as HTMLDivElement;

  if (percentage < 100) {
    const randomPercentage = Math.floor(Math.random() * 30);
    percentage = Math.min(100, percentage + randomPercentage);
    percentageDisplay.textContent = `${percentage}%`;
  }

  percentage === 100 ? launchAnimations() : null;

  setTimeout(updatePercentageDisplay, randomInterval);
}

setTimeout(updatePercentageDisplay, 250);

function launchAnimations() {
  const tl = gsap.timeline({
    defaults: {
      ease: 'Power1.easeOut',
    },
  });

  tl.to('.percentage-display', { autoAlpha: 0, duration: 1 })
    .to('.round-ball', {
      animation: 'none',
      width: '5rem',
      height: '5rem',
      duration: 0.5,
      ease: 'Power4.easeOut',
    })
    .to('.round-ball', {
      scale: 100,
      duration: 1,
    })
    .to('.round-ball', {
      width: '100vw',
      height: '100vh',
      borderRadius: '0',
      duration: 0,
    })
    .to('.introduction', { autoAlpha: 0, duration: 1 });
}
