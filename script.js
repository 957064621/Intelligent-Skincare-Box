document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const svg = document.getElementById('my-svg');

  container.addEventListener('scroll', () => {
    svg.style.transform = `translateY(${container.scrollTop}px)`;
  });

  container.addEventListener('resize', () => {
    svg.style.height = `${container.scrollHeight}px`;
  });

  svg.style.height = `${container.scrollHeight}px`;
});