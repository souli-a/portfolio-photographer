const magneticElements = document.querySelectorAll(
  '.magnetic-element'
) as NodeListOf<HTMLElement>;

magneticElements.forEach((element) => {
  element.addEventListener('mousemove', (e: MouseEvent) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;
    const transX = x - elementWidth / 2;
    const transY = y - elementHeight / 2;
    element.style.transform = `translateX(${transX / 3}px) translateY(${
      transY / 3
    }px)`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
    element.style.backgroundPositionX = '';
    element.style.backgroundPositionY = '';
  });
});
