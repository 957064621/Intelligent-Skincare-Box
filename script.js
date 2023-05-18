document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const svg = document.getElementById('my-svg');
  const loadingAnimation = document.getElementById('loading-animation');
  svg.style.display = 'none';

  svg.addEventListener('load', () => {
    loadingAnimation.style.display = 'none';
    svg.style.display = 'block';
  }

  container.addEventListener('scroll', () => {
    svg.style.transform = `translateY(${container.scrollTop}px)`;
  });

  container.addEventListener('resize', () => {
    svg.style.height = `${container.scrollHeight}px`;
  });

  svg.style.height = `${container.scrollHeight}px`;
});