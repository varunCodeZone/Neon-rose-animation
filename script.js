
const neonBtn = document.getElementById('neon-btn');
const roseContainer = document.getElementById('rose-container');
const roseimg = document.getElementById('rose-img');

neonBtn.addEventListener('click', () => {
  neonBtn.style.display = 'none';
  roseContainer.style.display = 'block';
  roseimg.style.animation = 'slow-motion 5s';
});

const slowMomo = `
  @keyframes slow-motion {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
const style = document.createElement('style');
style.innerHTML = slowMomo;
document.head.appendChild(style);